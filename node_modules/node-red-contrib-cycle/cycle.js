module.exports = function(RED) {
    function CycleNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var nodeContext = this.context();
            var conf_outputs = parseInt(config.outputs);
            var out = new Array(conf_outputs);
            var output;
            if (nodeContext.get('output') === undefined) {
                output = undefined;
            } else {
                output = nodeContext.get('output');
            }
             
            if (msg.hasOwnProperty("reset")) {
                nodeContext.set('output', undefined);
            } else {
                var skip = 1;
                if (msg.hasOwnProperty('skip') && Number.isInteger(msg.skip)) {
                    skip = msg.skip;
                }
                if (output === undefined) {
                    if (skip > 0) {
                        output = skip - 1;
                    } else {
                        output = skip;
                    }
                } else {
                    output += skip;
                }
                while (output < 0) {
                    output += conf_outputs;
                }
                output %= conf_outputs;
                out[output] = msg;
                nodeContext.set('output', output);
                node.send(out);
            }
        });
    }
    RED.nodes.registerType("cycle",CycleNode);
}
