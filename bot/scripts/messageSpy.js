// Description:
//   <description of the scripts functionality>
//
// Dependencies:
//   "<module name>": "<module version>"
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   hubot <trigger> - <what the respond trigger does>
//   <trigger> - <what the hear trigger does>
//
// Notes:
//   <optional notes required for the script>


module.exports = (robot) => {
    robot.hear(/.*/i, (res) => {
        //res.send(4);
        console.log(res);
    })
}
