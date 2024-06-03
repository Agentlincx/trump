
function nav() {
    var a = document.querySelector("#snav #a1");
    var b = document.querySelector("#snav #a2");
    var c = document.querySelector("#navl");

    a.classList.toggle("a1");
    b.classList.toggle("a2");
    c.classList.toggle("navl");
}

/*
function hd1() {

    var a = document.querySelector("#p1");
    var aa = document.querySelector("#p1>div>div:first-child");
    var ab = document.querySelector("#p1>div>div:nth-child(2)");
    var ac = document.querySelector("#p1 a:first-of-type");
    var aca = document.querySelector("#p1 a:nth-of-type(2)");
    var ad = document.querySelector("#world");
    window.addEventListener("load", animh);
    window.addEventListener("scroll", animh);

    function animh() {
        if (Math.round(a.getBoundingClientRect().top) <= 600) {
            setTimeout(() => {
                aa.style.transform = 'translateX(150vw)';
            }, 100);
            setTimeout(() => {
                ab.style.transform = 'translateY(5vh)';
                ab.style.opacity = '1';
            }, 1000);

            setTimeout(() => {
                ac.style.transform = 'translateX(150vw)';
            }, 200);

            setTimeout(() => {
                aca.style.transform = 'translateX(150vw)';
            }, 200);

            setTimeout(() => {
                ad.style.transform = 'translateX(-100vw)';
            }, 1000);
        }
    }



    //head 2 animation
    var b = document.querySelector("#p2");
    var ba = document.querySelector("#p7 iframe");
    var bb = document.querySelector("#p7>div");

    window.addEventListener("scroll", animi);
    window.addEventListener("load", animi);

    function animi() {
        if (Math.round(ba.getBoundingClientRect().top) <= 600) {
            setTimeout(() => {
                ba.style.transform = 'translateY(-5vh)';
                ba.style.opacity = "1";
            }, 100);
        }

        for (let i of bb.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }


    }


    //head 3 animation
    var bc = document.querySelector("#p3>div:nth-child(3)");

    window.addEventListener("scroll", animl);
    window.addEventListener("load", animl);

    function animl() {

        for (let i of bc.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }


    }


    //head 4 animation
    var bd = document.querySelector("#p2>div:nth-child(2)");

    window.addEventListener("scroll", animm);
    window.addEventListener("load", animm);

    function animm() {

        for (let i of bd.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }


    //head 5 animation
    var be = document.querySelector("#p4>div:nth-child(2)");

    window.addEventListener("scroll", animn);
    window.addEventListener("load", animn);

    function animn() {

        for (let i of be.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }


    //head 6 animation
    var bf = document.querySelector("#p5>div:first-of-type");

    window.addEventListener("scroll", animo);
    window.addEventListener("load", animo);

    function animo() {

        for (let i of bf.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }

}

*/

/*
function loadn() {
    var a = [["about",
        "gs"],
        ["tokenomics",
            "ser"],
        
        
        ["buy",
            ""]];

    var arr = [["Login",
        "./user/index.php"],
        ["Signup",
            "./user/signup.html"]];

    var b = document.querySelector("#navl>div");
    var bz = document.querySelector("#navl>div:nth-child(2)");

    for (let i of a) {
        var cov = document.createElement("div");
        var c = document.createElement("div");
        var ca = document.createElement("div");
        ca.innerText = i[0];

        c.appendChild(ca);

        cov.appendChild(c);

        if (i.length > 2) {
            var d = document.createElement("div");
            d.innerHTML = "\u203A";
            d.classList.add("li");
            c.classList.add("fli");

            c.addEventListener("click", function() {
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    d.innerHTML = "\u203A";
                    content.style.maxHeight = null;
                    d.style.transform = "rotate(0deg)";
                } else {
                    d.innerHTML = "\u2038";
                    d.style.transform = "rotate(180deg)";
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });

            c.appendChild(d);

            var e = document.createElement("div");
            e.classList.add("lii");

            for (let j = 2; j < i.length; j++) {
                var f = document.createElement("div");
                f.onclick = function() {
                    window.location.assign(i[j][3]);
                }
                var ea = document.createElement("i");
                ea.classList.add(i[j][0], "fa-"+i[j][1]);
                f.appendChild(ea);

                var eb = document.createElement("div");
                eb.innerText = i[j][2];
                f.appendChild(eb);

                e.appendChild(f);

                cov.appendChild(e);
            }
        } else {
            c.onclick = function() {
                window.location.assign(i[1]);
            }
        }
        b.appendChild(cov);

    }

    for (let i of arr) {
        var ya = document.createElement("a");
        ya.innerText = i[0];
        ya.href = i[1];
        bz.appendChild(ya);
    }


    var g = document.querySelector("#lnav>#nav>div:nth-child(2)");

    for (let i of a) {
        var h = document.createElement("div");
        var ha = document.createElement("div");
        ha.innerText = i[0];
        h.appendChild(ha);

        if (i.length > 2) {
            var k = document.createElement('div');
            h.appendChild(k);

            var par = false;

            // ha.addEventListener("click", function(){
            //
            //
            //                 if (par == true){
            //                 var t = document.querySelectorAll(".disp");
            //
            //                 t[0].classList.remove("disp");
            //                 }
            //
            //                 var cont = this.nextElementSibling;
            //
            //                 cont.classList.toggle("disp");
            //
            //                 par = true;
            //
            //             });

            for (let j = 2; j < i.length; j++) {
                var l = document.createElement("a");
                var lb = document.createElement("i");
                lb.classList.add(i[j][0], "fa-"+i[j][1]);
                l.appendChild(lb);

                var la = document.createElement("span");
                la.innerText = i[j][2];
                l.appendChild(la);

                k.appendChild(l);
            }

        }

        g.appendChild(h);
    }
}

loadn();

*/








