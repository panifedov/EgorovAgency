export const isEmailValid = (email) => {
    const emailRegExp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return emailRegExp.test(email);
  };
  
  export const scrollToTarget = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
  
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetTop = target.getBoundingClientRect().top + scrollTop;
  
    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };
  
  export const uniqueIdGenerator = () =>
    Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  