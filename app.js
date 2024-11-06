"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const play = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS
};
// SUCCESS = 1
// IN_PROCESS =2
// FAILED = 3
function action(status) {
}
action(StatusCode.SUCCESS);
