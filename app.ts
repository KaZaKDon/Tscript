enum StatusCode{
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

const play = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS
};

// SUCCESS = 1
// IN_PROCESS =2
// FAILED = 3

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS)