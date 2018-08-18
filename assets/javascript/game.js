var playFarClass = "";
var oppFarClass = "";
var wins = 0;
const viv = "vivian";
const player = {
    name: "Bill",
    hp: 100,
    ap: 20,
    ohp: 20,
    hit: function(oppap) {
        this.hp = this.hp - oppap;
    },
    getap: function() {
        return this.ap;
    },
    gethp: function() {
        return this.hp;
    },
    getname: function() {
        return this.name;
    },
    showap: function() {
        document.getElementById("hp").innerText = this.hp;
    },
    showDamageToOpp: function() {
        document.getElementById("message").innerText =
            "You did " + this.ap + " damage to your enemy!";
    },
    sethp: function(hp) {
        this.hp = hp;
    },
    setap: function(ap) {
        this.ap = ap;
        this.ohp = ap;
    },
    setname: function(name) {
        this.name = name;
    },

    augmentAttack: function() {
        this.ap = this.ap + this.ohp;
    }
};
const opp = {
    name: "Bill",
    hp: 100,
    ap: 20,
    hit: function(oppap) {
        this.hp = this.hp - oppap;
    },
    getap: function() {
        return this.ap;
    },
    gethp: function() {
        return this.hp;
    },
    getname: function() {
        return this.name;
    },
    showap: function() {
        document.getElementById("opphp").innerText = this.hp;
    },
    showDamageToPlayer: function() {
        document.getElementById("message").innerText =
            this.name + " did you " + this.ap + " damage!";
    },
    sethp: function(hp) {
        this.hp = hp;
    },
    setap: function(ap) {
        this.ap = ap;
    },
    setname: function(name) {
        this.name = name;
    }
};

$(document).ready(function() {
    console.log("ready");
    $("#playerMessage").text("Select Your Player:");
    $(".playerchoice").on("click", function() {
        var currentId = $(this).attr("id");
        console.log("you chose me!");
        $("#playerMessage").text("Select Your Opponent:");
        if (currentId == "viv") {
            console.log("viv chosen");
            $("#player").addClass("vivian");
            playFarClass = "vivianfire";
            player.sethp(150);
            player.setap(50);
            player.setname("Vivian");
        }
        if (currentId == "sway") {
            console.log("sway chosen");
            $("#player").addClass("sway");
            playFarClass = "swayfire";
            player.sethp(170);
            player.setap(20);
            player.setname("Sway");
        }
        if (currentId == "bill") {
            console.log("bill chosen");
            $("#player").addClass("bill");
            playFarClass = "billfire";
            player.sethp(150);
            player.setap(20);
            player.setname("Bill");
        }
        if (currentId == "mario") {
            console.log("mario chosen");
            $("#player").addClass("mario");
            playFarClass = "mariofire";
            player.sethp(200);
            player.setap(20);
            player.setname("Mario");
        }
        player.showap();

        $(this).toggle();
        $(".playerchoice").off("click");
        $(".playerchoice").on("click", function() {
            var currentId = $(this).attr("id");
            if (currentId == "viv") {
                console.log("viv chosen");
                $("#opp").addClass("vivianopp");
                oppFarClass = "vivianoppfire";
                opp.sethp(150);
                opp.setap(20);
                opp.setname("Vivian");
            }
            if (currentId == "sway") {
                console.log("sway chosen");
                $("#opp").addClass("swayopp");
                oppFarClass = "swayoppfire";
                opp.sethp(170);
                opp.setap(30);
                opp.setname("Sway");
            }
            if (currentId == "mario") {
                console.log("mario chosen");
                $("#opp").addClass("marioopp");
                oppFarClass = "mariooppfire";
                opp.sethp(200);
                opp.setap(20);
                opp.setname("Mario");
            }
            if (currentId == "bill") {
                console.log("bill chosen");
                $("#opp").addClass("billopp");
                oppFarClass = "billfireopp";
                opp.sethp(150);
                opp.setap(50);
                opp.setname("Bill");
            }
            opp.showap();
            $(this).toggle();
            $("#playerSelection").toggle();
        });
    });
});

$("#attack").on("click", function() {
    $("#attack").off("click");
    $("#fireball").toggleClass("blast");
    $("#fireball").height(player.getap() * 2);
    $("#fireball").width(player.getap() * 2);
    setTimeout(blast2, 1200);
});
function blast2() {
    $("#fireball").toggleClass("blast");

    $("#opp").toggleClass(oppFarClass);
    $("#opp").toggleClass("shake");
    player.showDamageToOpp();

    opp.hit(player.getap());
    opp.showap();
    setTimeout(blast3, 400);
}
function blast3() {
    player.augmentAttack();
    $("#opp").toggleClass(oppFarClass);
    $("#opp").toggleClass("shake");
    $("#fireball").height(100);
    $("#fireball").width(100);
    setTimeout(blast4, 600);
}
function blast4() {
    $("#fireball").toggleClass("revblast");
    setTimeout(blast5, 1450);
}
function blast5() {
    $("#fireball").toggleClass("revblast");
    $("#player").toggleClass(playFarClass);
    $("#player").toggleClass("shake");
    player.hit(opp.getap());
    player.showap();
    opp.showDamageToPlayer();
    setTimeout(blast6, 400);
}
function blast6() {
    $("#player").toggleClass("shake");
    $("#player").toggleClass(playFarClass);
    $("#attack").on("click", function() {
        $("#attack").off("click");
        $("#fireball").toggleClass("blast");
        $("#fireball").height(player.getap() * 2);
        $("#fireball").width(player.getap() * 2);
        setTimeout(blast2, 1200);
    });
    checkForWin();
}
function checkForWin() {
    if (wins >= 2) {
        document.getElementById("message").innerText =
            "No one left to fight. You won the whole game! WAY TO GO!! You are the new Grand High Fire Marshal";
        $("body").toggleClass("fire");
        $("button").text("Start Over");
        $("button").toggleClass("btn-danger");
        $("button").toggleClass("btn-info");
        $("button").off("click");
        $("#opp").toggle();
        $("button").on("click", function() {
            location.reload();
        });
    } else if (opp.gethp() <= 0 && player.gethp() > 0) {
        wins++;
        document.getElementById("message").innerText = "YOU WIN!!";
        $("#opp").toggle();
        $("button").text("Next Battle");
        $("button").toggleClass("btn-danger");
        $("button").toggleClass("btn-info");
        $("button").off("click");
        $("button").on("click", function() {
            console.log("togglin");
            $("#opp").removeClass("vivianopp");
            $("#opp").removeClass("swayopp");
            $("#opp").removeClass("marioopp");
            $("#opp").removeClass("billopp");
            $("#playerSelection").toggle();
            $("#opp").show();
            $("button").toggleClass("btn-danger");
            $("button").toggleClass("btn-info");
            $("button").text("Attack");
            $("button").off("click");
            $("#attack").on("click", function() {
                $("#attack").off("click");
                $("#fireball").toggleClass("blast");
                $("#fireball").height(player.getap() * 2);
                $("#fireball").width(player.getap() * 2);
                setTimeout(blast2, 1200);
            });
        });
    } else if (opp.gethp() > 0 && player.gethp() <= 0) {
        document.getElementById("message").innerText = "YOU LOOSE!!";
        $("button").text("Start Over");
        $("button").toggleClass("btn-danger");
        $("button").toggleClass("btn-info");
        $("button").off("click");
        $("button").on("click", function() {
            location.reload();
        });
    } else if (opp.gethp() <= 0 && player.gethp() <= 0) {
        document.getElementById("message").innerText = "TIE GAME!!";
        $("button").text("Start Over");
        $("button").toggleClass("btn-danger");
        $("button").toggleClass("btn-info");
        $("button").off("click");
        $("button").on("click", function() {
            location.reload();
        });
    }
}
