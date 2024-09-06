import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../service/auth.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if(req.url.includes('/login')){
    return next(req);
  }
  const token = AuthService.getToken();
  console.log("token2 " + JSON.stringify(token));

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  return next(authReq);
};
