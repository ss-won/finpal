
function validate(form){

    var title = form.title;
    var link = form.link;
    var desc = form.desc;
    

    var ck =new RegExp(/^(http(s)?:\/\/)([a-z0-9\w]+\.)+[a-z0-9]{2,}\/+[\w\W]{2,}/,'gm');

    //title 20자 이내
    if(title.value.length>20||title.value==''){
        console.log('제목 20자 이내 입력 요망')
        return false;
    }
    //link는 새로운 주소로 만들어서 태그형태로 저장!
    if(!ck.test(link.value)){
        console.log('유효한 링크 형식 아늼');
        return false
    }
    //desc는 100자 이내
    if(desc.value.length>100||desc.value==''){
        console.log('100자 초과');
        return false;
    }

    return true;
   
}