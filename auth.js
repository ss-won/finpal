module.exports={
//authentication function : login 여부 판단
authUser:function(req,res){
    if(req.session.is_logined){
      return true;
    }
    else{
      return false;
    }
  },
  
authRender:function(req,res,contents){
    if(this.authUser(req,res)){
    var accountinfo = {login_success:true,name:req.session.name,nname:req.session.nname,id:req.session.email,utype:req.session.utype}
    accountinfo = Object.assign(accountinfo,contents);
    return accountinfo;
    }
    else{
      var accountinfo = {login_success:false};
      accountinfo = Object.assign(accountinfo,contents);
      return accountinfo;
    }
  }
}