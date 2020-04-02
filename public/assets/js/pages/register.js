function validate(form){
    var p = document.getElementsByName('message');
    var message = '';
    var name = form.name;
    var email = form.email;
    var pwd = form.pwd;
    var repwd = form.pwdCheck;
    
    //[출처] [Javascript] 정규식 체크 예제|작성자 멘토
    //[출처] https://beagle-dev.tistory.com/114 [언젠간 되어있겠지]
    //RegExp : 정규식 객체 'g':전체 판별. 처음 일치에서 중단하지 않고, 문자열 전체에서 판별합니다.
    var regExpid = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,'g');
    var regExppw = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$");//8자 미만 제한
    var specialChar = new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/,'gi');
    var regExpname = new RegExp(/^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{1,20}$/);//1-20자 제한, 특수문자제한

    console.log(regExppw.test('123asdABC!'),regExppw.test('123asdABC'),regExppw.test('123asdde'))
    //기존 유효성 검사 문구 삭제 및 초기화
    for(var i=0;i<p.length;i++){
        p[i].innerHTML = '';
        message = '';
    }

    // 전개 순서 name -> email -> pwd -> checkpwd(확인 우선순서)
    if(name.value==""){
        message = "이름을 입력해주세요(1-20자,특수문자 제외)";
        name.focus();
        p[0].innerHTML = message;
        return false;
    }
    else if(!regExpname.test(name.value)||specialChar.test(name.value)){
        message = "특수문자 없이 20자 이내로 입력해주세요!"
        name.focus();
        p[0].innerHTML = message;
        return false;
    }
    //email 확인
    else if(email.value==""){
        message = "이메일을 입력해주세요(ex:example@finpal.com)";
        email.focus();
        p[1].innerHTML = message;
        return false;
    }
    else if(!regExpid.test(email.value)){
        message ="이메일 형식으로 입력해주세요(ex:example@finpal.com)";
        email.focus();
        p[1].innerHTML = message;
        return false;
    }
    //password 확인
    else if(pwd.value==""){
        message = "비밀번호를 입력해주세요(8자리 이상의 숫자+문자+특수문자)";
        pwd.focus();
        p[2].innerHTML = message;
        return false;
    }
    else if(!regExppw.test(pwd.value)){
        message = "패스워드는 8자리이상으로 입력해주세요(대소문자 구분,숫자+문자+특수문자 조합)";
        pwd.focus();
        p[2].innerHTML = message;
        return false;
    }
    //pwd==repwd 인지 확인(공백도 같이 확인 가능) 
    else if(pwd.value!=repwd.value){
        message = "입력하신 패스워드와 일치하지 않습니다."
        repwd.focus();
        p[3].innerHTML = message;
        return false;
    }

    return true;


}
