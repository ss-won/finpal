function validate(form){
        var p = document.getElementsByName('message');
        var message = '';

        var email = form.email;
        var pwd = form.pwd;
        
        
        //[출처] [Javascript] 정규식 체크 예제|작성자 멘토
        //RegExp : 정규식 객체
        var regExpid = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,'g');
            
             //기존 message 초기화
             for(var i=0;i<p.length;i++)
             p[i].innerHTML = '';

            //validate 우선순위 (email존재여부 >email형식맞춤여부 >pwd존재여부)
            // (1) : email 입력이 없을 때
            if(email.value==""){
                    email.focus();
                    message='아이디를 입력해주세요!';
                    p[0].style.visibility = 'visible';
                    p[0].innerHTML = message;
                    return false;
                
            }
           //(2) : email 형식이 안맞을 때 
           if(!regExpid.test(email.value)){
                email.focus();
                message ='올바른 이메일을 입력하세요!(example@finpal.com)'
                p[0].style.visibility = 'visible';
                p[0].innerHTML = message;
                return false;
            }
            //(3) : pwd 입력이 없을 때
            if(pwd.value==""&&regExpid.test(email.value)){
                pwd.focus();
                message='비밀번호를 입력해주세요!';
                p[1].style.visibility = 'visible';
                p[1].innerHTML = message;
                return false;
            }
            
        return true;
            
    }
    

