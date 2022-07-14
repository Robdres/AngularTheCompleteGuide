export class AuthService {
  loggedIn = false; 
    
  isAuthenticated(){
    const promise = new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          resolve(this.loggedIn);
        },300)
      }
    )
    return promise;
  }

  login(){
    console.log('login')
    this.loggedIn = true; 
  }

  logout(){
    console.log('logout');
    this.loggedIn = false;
  }
}
