var posts=["2021/09/19/CVE-2021-40444复现并上线CobaltStrike/","2021/12/17/Log4j2复现并反弹shell/","2021/09/18/SSRF利用Gopher协议打内网Mysql、Redis、Php-fpm和FTP+SSRF攻击Fpm/","2021/09/15/渗透信息收集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };