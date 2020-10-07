let rmbtns = document.getElementsByClassName('rm');
let perid;

//Buttion click event단에 실행될 콜백 함수
function removeData(event) {
    'use strict';
    perid = this.id;
    let id = perid.replace("rm", "");
    event.preventDefault();
    event.returnValue = false;
    try {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((d) => {
            if (d) {
                getrmData(id);
            } else {
                swal("삭제가 취소되었습니다.");
            }
        })

    } catch (err) {
        console.log(err);
    }
}

// 각 게시물 element button에 이벤트 달기
for (let element of rmbtns) {
    element.addEventListener("click", removeData);
}

// fetch구문을 통한 비동기통신 구현
async function getrmData(id) {
    let rmid = document.getElementById(id);

    await fetch("/vrsys/remove" + id)
        .then(res => res.json())
        .then(resJson => {
            swal(resJson);
            rmid.remove();
        });
}