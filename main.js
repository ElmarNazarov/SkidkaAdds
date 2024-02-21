let lastcheck = window.matchMedia("(max-width: 1200px)").matches;
const searchtemplate = document.querySelector("[search-item-template]"),
    searchcontainer = document.querySelector("[search-container]"),
    searchinput = document.querySelector("[search-input]"),
    searchoutvalues = JSON.parse(searchout.replaceAll("&quot", "'"));
let searching = [];
searchinput.addEventListener("input", (e) => {
    var n = e.target.value.toLowerCase();
    searching.forEach((e) => {
        var t =
            e.name.toLowerCase().includes(n) ||
            e.link.toLowerCase().includes(n);
        e.element.classList.toggle("remove", !t),
            console.log(e.value),
            e.element.classList.toggle("search-link", t);
    });
}),
    (searching = searchoutvalues.map((e) => {
        const t = searchtemplate.content.cloneNode(!0).children[0],
            n = t.querySelector("[search-name]");
        return (
            (t.href = e.Link),
            (n.textContent = e.Name),
            searchcontainer.append(t),
            { name: e.Name, link: e.Link, element: t }
        );
    }));
for (
    var acc = document.getElementsByClassName("accordion-btn"),
        heightN = "380px",
        i = 0;
    i < acc.length;
    i++
)
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active-accordion");
        var e = this.nextElementSibling;
        e.style.height === heightN
            ? (e.style.height = "0px")
            : (e.style.height = heightN);
    });
function mediacheck(e, t) {
    e != t ? location.reload() : (t = e);
}
function searchbar(e) {
    var t, n, o, a, c;
    mediacheck(e, lastcheck),
        e &&
            ((t = document.querySelectorAll(".hidder")),
            (o = document.getElementById("search")),
            (a = document.getElementById("search-btn")),
            (c = document.getElementById("searched")),
            (o.onfocus = function () {
                (t.forEach(function(element){element.style.display = "none";})),
                    (c.style.display = "block"),
                    (o.style.borderRadius = "20px 0 0 0px"),
                    (a.style.borderRadius = "0 20px 0 0");
            }),
            (o.onblur = function () {
                (t.forEach(function(element){element.style.display = null;})),
                    (c.style.display = "none"),
                    "" == o.value
                        ? ((o.style.borderRadius = "40px"),
                          (a.style.borderRadius =
                              "0 0.75em 0.75em 0 / 0 1.5em 1.5em 0"))
                        : ((o.style.borderRadius = "40px 0 0 40px"),
                          (a.style.borderRadius = "0 40px 40px 0"));
            }));
}
function magnify(e, a) {
    var c, i, s, d;
    function t(e) {
        var t, n, o;
        e.preventDefault(),
            (o = n = 0),
            (t = (t = e) || window.event),
            (e = c.getBoundingClientRect()),
            (n = t.pageX - e.left),
            (o = t.pageY - e.top),
            (n -= window.pageXOffset),
            (o -= window.pageYOffset),
            (o = (n = { x: n, y: o }).y),
            (n = n.x) > c.width - s / a && (n = c.width - s / a),
            n < s / a && (n = s / a),
            o > c.height - d / a && (o = c.height - d / a),
            o < d / a && (o = d / a),
            "block" == i.style.display &&
                (i.style.backgroundPosition =
                    "-" + (n * a - s + 3) + "px -" + (o * a - d + 3) + "px");
    }
    (c = document.getElementById(e)),
        ((i = document.getElementById("magnifier")).style.display = "block"),
        (i.style.marginLeft = c.offsetLeft + "px"),
        (i.style.width = c.offsetWidth + 4 + "px"),
        (i.style.height = c.offsetHeight + 3 + "px"),
        (i.style.backgroundImage = "url('" + c.src + "')"),
        (i.style.backgroundRepeat = "no-repeat"),
        (i.style.backgroundSize = c.width * a + "px " + c.height * a + "px"),
        (s = i.offsetWidth / 2),
        (d = i.offsetHeight / 2),
        i.addEventListener("mousemove", t),
        c.addEventListener("mousemove", t),
        i.addEventListener("touchmove", t),
        c.addEventListener("touchmove", t);
}
$(".search").ready(function () {
    var e = document.getElementById("search"),
        t = document.getElementById("search-btn"),
        n = document.getElementById("searched");
    (e.onfocus = function () {
        (n.style.display = "block"),
            (e.style.borderRadius = "20px 0 0 0px"),
            (t.style.borderRadius = "0 20px 0 0");
    }),
        (e.onblur = function () {
            (n.style.display = "none"),
                (e.style.borderRadius = "40px 0 0 40px"),
                (t.style.borderRadius = "0 40px 40px 0");
        });
}),
    $(".searched").on("mousedown", function (e) {
        e.preventDefault();
    }),
    $(document).ready(function () {
        var t, e, n;
        null != document.getElementById("Modal") &&
            ((t = document.getElementById("Modal")),
            (e = document.getElementById("disc")),
            (n = document.getElementById("magnifier")),
            $(window)
                .resize(function () {
                    checker = 800 <= $(window).width();
                })
                .resize(),
            $(".discount-img").click(function () {
                checker &&
                    (document
                        .querySelectorAll("*")
                        .forEach((e) => (e.style.zIndex = "0")),
                    (t.style.display = "block"),
                    (e.src = this.src),
                    e.addEventListener("click", function () {
                        magnify("disc", 2);
                    }),
                    n.addEventListener("click", function () {
                        n.style.display = "none";
                    }));
            }),
            $(document).on("click", function (e) {
                "Modal" === e.target.id &&
                    (document
                        .querySelectorAll("*")
                        .forEach((e) => (e.style.zIndex = null)),
                    (t.style.display = "none"));
            }));
    }),
    window.addEventListener("resize", function () {
        searchbar(window.matchMedia("(max-width: 1300px)").matches);
    }),
    (window.onload = () => {
        searchbar(window.matchMedia("(max-width: 1300px)").matches);
    });