$(document).ready(function(){
        fetchSchedule();
        fetchPreGameStats();
        
});
            
function fetchSchedule() {
    $.ajax({
        url: "http://159.203.132.202:8080/BetsiKone/nhl/schedule.json"
    }).done(function(data) {
        $.each(data, function(idx, obj){

            $('.schedule').append('<li class="ui-first-child ui-last-child"><a href="#PreGameView" class="centered ui-btn ui-btn-icon-right ui-icon-carat-r click-it" data-menu-button="'+obj.id+'_'+obj.date+'">' + obj.date +'<br>'+ obj.home +'<br>'+ obj.visitor + '</a></li>');
        })

    })

}

function fetchPreGameStats(){
    $("ul").on("click", ".click-it", function(){

        //EMPRTY PREDICTIONS
        $('.predictionsdiv .winner').empty();
        $('.predictionsdiv .strengthdiff').empty();
        $('.predictionsdiv .over45').empty();
        $('.predictionsdiv .over55').empty();
        $('.predictionsdiv .stover15').empty();
        $('.predictionsdiv .ndover15').empty();
        $('.predictionsdiv .rdover15').empty();

        //EMPTY HOMETEAM BASICSTATS
        $('.hometeamdiv a').empty();
        $('.hometeaminfo .gp').empty();
        $('.hometeaminfo .homegp').empty();
        $('.hometeaminfo .strength').empty();
        $('.hometeaminfo .gfa').empty();
        $('.hometeaminfo .gaa').empty();
        $('.hometeaminfo .l5gfa').empty();
        $('.hometeaminfo .l5gaa').empty();
        $('.hometeaminfo .wtl').empty();
        $('.hometeaminfo .wtlhome').empty();

        //EMPTY HOMETEAM BASICSTATS
        $('.visitorteamdiv a').empty();
        $('.visitorteaminfo .gp').empty();
        $('.visitorteaminfo .visitorgp').empty();
        $('.visitorteaminfo .strength').empty();
        $('.visitorteaminfo .gfa').empty();
        $('.visitorteaminfo .gaa').empty();
        $('.visitorteaminfo .l5gfa').empty();
        $('.visitorteaminfo .l5gaa').empty();
        $('.visitorteaminfo .wtl').empty();
        $('.visitorteaminfo .wtlvisitor').empty();

        //EMPTY UNDER/OVER STATS
        //OVER 4,5
        $('.over45div .homename').empty();
        $('.over45div .visitorname').empty();
        $('.over45div .league').empty();
        $('.over45div .home').empty();
        $('.over45div .visitor').empty();
        $('.over45div .avg').empty();
        $('.over45div .diff').empty();

        //OVER 5,5
        $('.over55div .homename').empty();
        $('.over55div .visitorname').empty();
        $('.over55div .league').empty();
        $('.over55div .home').empty();
        $('.over55div .visitor').empty();
        $('.over55div .avg').empty();
        $('.over55div .diff').empty();

        //OVER 6,6
        $('.over65div .homename').empty();
        $('.over65div .visitorname').empty();
        $('.over65div .league').empty();
        $('.over65div .home').empty();
        $('.over65div .visitor').empty();
        $('.over65div .avg').empty();
        $('.over65div .diff').empty();

        //EMPTY PERIODSTATS

        //1st PERIOD
        $('.1stover15div .homename').empty();
        $('.1stover15div .visitorname').empty();
        $('.1stover15div .league').empty();
        $('.1stover15div .home').empty();
        $('.1stover15div .visitor').empty();
        $('.1stover15div .avg').empty();
        $('.1stover15div .diff').empty();

        $('.1stover25div .homename').empty();
        $('.1stover25div .visitorname').empty();
        $('.1stover25div .league').empty();
        $('.1stover25div .home').empty();
        $('.1stover25div .visitor').empty();
        $('.1stover25div .avg').empty();
        $('.1stover25div .diff').empty();

        //2nd PERIOD
        $('.2ndover15div .homename').empty();
        $('.2ndover15div .visitorname').empty();
        $('.2ndover15div .league').empty();
        $('.2ndover15div .home').empty();
        $('.2ndover15div .visitor').empty();
        $('.2ndover15div .avg').empty();
        $('.2ndover15div .diff').empty();

        $('.2ndover25div .homename').empty();
        $('.2ndover25div .visitorname').empty();
        $('.2ndover25div .league').empty();
        $('.2ndover25div .home').empty();
        $('.2ndover25div .visitor').empty();
        $('.2ndover25div .avg').empty();
        $('.2ndover25div .diff').empty();

        //3rd PERIOD
        $('.3rdover15div .homename').empty();
        $('.3rdover15div .visitorname').empty();
        $('.3rdover15div .league').empty();
        $('.3rdover15div .home').empty();
        $('.3rdover15div .visitor').empty();
        $('.3rdover15div .avg').empty();
        $('.3rdover15div .diff').empty();

        $('.3rdover25div .homename').empty();
        $('.3rdover25div .visitorname').empty();
        $('.3rdover25div .league').empty();
        $('.3rdover25div .home').empty();
        $('.3rdover25div .visitor').empty();
        $('.3rdover25div .avg').empty();
        $('.3rdover25div .diff').empty();

        //EMPTY SCORECOUNTER
        //TEAMS
        $('.hometeam-scorecounter-div a').first().empty();
        $('.visitorteam-scorecounter-div a').first().empty();
        //WINS AND LOSSES
        $('.hometeam-scorecounter-win-div a').empty();
        $('.hometeam-scorecounter-loss-div a').empty();
        $('.visitorteam-scorecounter-win-div a').empty();
        $('.visitorteam-scorecounter-loss-div a').empty();
        //EMPTY HOMETEAM
        //WIN
        $('.hometeam-scorecounter-win-div .scored0').empty();
        $('.hometeam-scorecounter-win-div .scored1').empty();
        $('.hometeam-scorecounter-win-div .scored2').empty();
        $('.hometeam-scorecounter-win-div .scored3').empty();
        $('.hometeam-scorecounter-win-div .scored4').empty();
        $('.hometeam-scorecounter-win-div .scored5').empty();
        $('.hometeam-scorecounter-win-div .scored6').empty();
        $('.hometeam-scorecounter-win-div .scoredMore').empty();
        $('.hometeam-scorecounter-win-div .allowed0').empty();
        $('.hometeam-scorecounter-win-div .allowed1').empty();
        $('.hometeam-scorecounter-win-div .allowed2').empty();
        $('.hometeam-scorecounter-win-div .allowed3').empty();
        $('.hometeam-scorecounter-win-div .allowed4').empty();
        $('.hometeam-scorecounter-win-div .allowed5').empty();
        $('.hometeam-scorecounter-win-div .allowed6').empty();
        $('.hometeam-scorecounter-win-div .allowedMore').empty();
        //EMPTY HOMETEAM
        //LOSS
        $('.hometeam-scorecounter-loss-div .scored0').empty();
        $('.hometeam-scorecounter-loss-div .scored1').empty();
        $('.hometeam-scorecounter-loss-div .scored2').empty();
        $('.hometeam-scorecounter-loss-div .scored3').empty();
        $('.hometeam-scorecounter-loss-div .scored4').empty();
        $('.hometeam-scorecounter-loss-div .scored5').empty();
        $('.hometeam-scorecounter-loss-div .scored6').empty();
        $('.hometeam-scorecounter-loss-div .scoredMore').empty();
        $('.hometeam-scorecounter-loss-div .allowed0').empty();
        $('.hometeam-scorecounter-loss-div .allowed1').empty();
        $('.hometeam-scorecounter-loss-div .allowed2').empty();
        $('.hometeam-scorecounter-loss-div .allowed3').empty();
        $('.hometeam-scorecounter-loss-div .allowed4').empty();
        $('.hometeam-scorecounter-loss-div .allowed5').empty();
        $('.hometeam-scorecounter-loss-div .allowed6').empty();
        $('.hometeam-scorecounter-loss-div .allowedMore').empty();
    
        //EMPTY VISITORTEAM
        //WIN
        $('.visitorteam-scorecounter-win-div .scored0').empty();
        $('.visitorteam-scorecounter-win-div .scored1').empty();
        $('.visitorteam-scorecounter-win-div .scored2').empty();
        $('.visitorteam-scorecounter-win-div .scored3').empty();
        $('.visitorteam-scorecounter-win-div .scored4').empty();
        $('.visitorteam-scorecounter-win-div .scored5').empty();
        $('.visitorteam-scorecounter-win-div .scored6').empty();
        $('.visitorteam-scorecounter-win-div .scoredMore').empty();
        $('.visitorteam-scorecounter-win-div .allowed0').empty();
        $('.visitorteam-scorecounter-win-div .allowed1').empty();
        $('.visitorteam-scorecounter-win-div .allowed2').empty();
        $('.visitorteam-scorecounter-win-div .allowed3').empty();
        $('.visitorteam-scorecounter-win-div .allowed4').empty();
        $('.visitorteam-scorecounter-win-div .allowed5').empty();
        $('.visitorteam-scorecounter-win-div .allowed6').empty();
        $('.visitorteam-scorecounter-win-div .allowedMore').empty();
        //EMPTY VISITORTEAM
        //LOSS
        $('.visitorteam-scorecounter-loss-div .scored0').empty();
        $('.visitorteam-scorecounter-loss-div .scored1').empty();
        $('.visitorteam-scorecounter-loss-div .scored2').empty();
        $('.visitorteam-scorecounter-loss-div .scored3').empty();
        $('.visitorteam-scorecounter-loss-div .scored4').empty();
        $('.visitorteam-scorecounter-loss-div .scored5').empty();
        $('.visitorteam-scorecounter-loss-div .scored6').empty();
        $('.visitorteam-scorecounter-loss-div .scoredMore').empty();
        $('.visitorteam-scorecounter-loss-div .allowed0').empty();
        $('.visitorteam-scorecounter-loss-div .allowed1').empty();
        $('.visitorteam-scorecounter-loss-div .allowed2').empty();
        $('.visitorteam-scorecounter-loss-div .allowed3').empty();
        $('.visitorteam-scorecounter-loss-div .allowed4').empty();
        $('.visitorteam-scorecounter-loss-div .allowed5').empty();
        $('.visitorteam-scorecounter-loss-div .allowed6').empty();
        $('.visitorteam-scorecounter-loss-div .allowedMore').empty();

        //EMPTY WIN/LOSS MARGINS
        //TEAMS
        $('.hometeam-winmargin-div a').empty();
        $('.visitorteam-winmargin-div a').empty();
        //WINS AND LOSSES
        $('.hometeam-winmargin-div .wins').empty();
        $('.hometeam-winmargin-div .losses').empty();
        $('.visitorteam-winmargin-div .wins').empty();
        $('.visitorteam-winmargin-div .losses').empty();
        //HOMETEAM
        $('.hometeam-winmargin-div .winmargin1').empty();
        $('.hometeam-winmargin-div .winmargin2').empty();
        $('.hometeam-winmargin-div .winmargin3').empty();
        $('.hometeam-winmargin-div .winmargin4').empty();
        $('.hometeam-winmargin-div .winmarginMore').empty();
        $('.hometeam-winmargin-div .lossmargin1').empty();
        $('.hometeam-winmargin-div .lossmargin2').empty();
        $('.hometeam-winmargin-div .lossmargin3').empty();
        $('.hometeam-winmargin-div .lossmargin4').empty();
        $('.hometeam-winmargin-div .lossmarginMore').empty();
        //VISITORTEAM
        $('.visitorteam-winmargin-div .winmargin1').empty();
        $('.visitorteam-winmargin-div .winmargin2').empty();
        $('.visitorteam-winmargin-div .winmargin3').empty();
        $('.visitorteam-winmargin-div .winmargin4').empty();
        $('.visitorteam-winmargin-div .winmarginMore').empty();
        $('.visitorteam-winmargin-div .lossmargin1').empty();
        $('.visitorteam-winmargin-div .lossmargin2').empty();
        $('.visitorteam-winmargin-div .lossmargin3').empty();
        $('.visitorteam-winmargin-div .lossmargin4').empty();
        $('.visitorteam-winmargin-div .lossmarginMore').empty();


        $.ajax({
            url: "http://159.203.132.202:8080/BetsiKone/nhl/schedule_"+$(this).data('menu-button')+".json"
        }).done(function(data){

            //INSERT PREDICTIONS
            $('.predictionsdiv .winner').append(data.prediction.winner);
            $('.predictionsdiv .strengthdiff').append(numeral(data.prediction.strengthDIFF).format('0.00'));
            $('.predictionsdiv .over45').append(numeral(data.prediction.over45).format('0.00'));
            $('.predictionsdiv .over55').append(numeral(data.prediction.over55).format('0.00'));
            $('.predictionsdiv .stover15').append(numeral(data.prediction.stOver15).format('0.00'));
            $('.predictionsdiv .ndover15').append(numeral(data.prediction.ndOver15).format('0.00'));
            $('.predictionsdiv .rdover15').append(numeral(data.prediction.rdOver15).format('0.00'));

            //INSERT HOMETEAM BASICSTATS
            $('.hometeamdiv a').append(data.teams[0].team);
            $('.hometeaminfo .gp').append(data.gameStats[0].gameCount);
            $('.hometeaminfo .homegp').append(data.basichomestats.homeGameCount);
            $('.hometeaminfo .strength').append(numeral(data.prediction.homeStrength).format('0.000'));
            $('.hometeaminfo .gfa').append(numeral(data.advancedStats[0].seasonGFA).format('0.00'));
            $('.hometeaminfo .gaa').append(numeral(data.advancedStats[0].seasonGAA).format('0.00'));
            $('.hometeaminfo .l5gfa').append(numeral(data.advancedStats[0].last5GFA).format('0.00'));
            $('.hometeaminfo .l5gaa').append(numeral(data.advancedStats[0].last5GAA).format('0.00'));
            $('.hometeaminfo .wtl').append(''+numeral(data.winningPercentages[0].won).format('0.0%')+' - '+numeral(data.winningPercentages[0].tie).format('0.0%')+' - '+numeral(data.winningPercentages[0].lost).format('0.0%')+'');
            $('.hometeaminfo .wtlhome').append(''+numeral(data.hvWinningPercentages[0].won).format('0.0%')+' - '+numeral(data.hvWinningPercentages[0].tie).format('0.0%')+' - '+numeral(data.hvWinningPercentages[0].lost).format('0.0%')+'');

            //INSERT VISITORTEAM BASICSTATS
            $('.visitorteamdiv a').append(data.teams[1].team);
            $('.visitorteaminfo .gp').append(data.gameStats[1].gameCount);
            $('.visitorteaminfo .visitorgp').append(data.basicvisitorstats.visitorGameCount);
            $('.visitorteaminfo .strength').append(numeral(data.prediction.visitorStrength).format('0.000'));
            $('.visitorteaminfo .gfa').append(numeral(data.advancedStats[1].seasonGFA).format('0.00'));
            $('.visitorteaminfo .gaa').append(numeral(data.advancedStats[1].seasonGAA).format('0.00'));
            $('.visitorteaminfo .l5gfa').append(numeral(data.advancedStats[1].last5GFA).format('0.00'));
            $('.visitorteaminfo .l5gaa').append(numeral(data.advancedStats[1].last5GAA).format('0.00'));
            $('.visitorteaminfo .wtl').append(''+numeral(data.winningPercentages[1].won).format('0.0%')+' - '+numeral(data.winningPercentages[1].tie).format('0.0%')+' - '+numeral(data.winningPercentages[1].lost).format('0.0%')+'');
            $('.visitorteaminfo .wtlvisitor').append(''+numeral(data.hvWinningPercentages[1].won).format('0.0%')+' - '+numeral(data.hvWinningPercentages[1].tie).format('0.0%')+' - '+numeral(data.hvWinningPercentages[1].lost).format('0.0%')+'');

            //INSERT UNDER/OVER STATS
            //OVER 4,5
            $('.over45div .homename').append(data.teams[0].team);
            $('.over45div .visitorname').append(data.teams[1].team);
            $('.over45div .league').append(numeral(data.gameStats[2].over45).format('0.0%'));
            $('.over45div .home').append(numeral(data.gameStats[0].over45).format('0.0%'));
            $('.over45div .visitor').append(numeral(data.gameStats[1].over45).format('0.0%'));
            $('.over45div .avg').append(numeral(data.gameStatsMath.over45AVG).format('0.0%'));
            $('.over45div .diff').append(numeral(data.gameStatsMath.over45DIFF).format('0.0%'));

            //OVER 5,5
            $('.over55div .homename').append(data.teams[0].team);
            $('.over55div .visitorname').append(data.teams[1].team);
            $('.over55div .league').append(numeral(data.gameStats[2].over55).format('0.0%'));
            $('.over55div .home').append(numeral(data.gameStats[0].over55).format('0.0%'));
            $('.over55div .visitor').append(numeral(data.gameStats[1].over55).format('0.0%'));
            $('.over55div .avg').append(numeral(data.gameStatsMath.over55AVG).format('0.0%'));
            $('.over55div .diff').append(numeral(data.gameStatsMath.over55DIFF).format('0.0%'));

            //OVER 6,6
            $('.over65div .homename').append(data.teams[0].team);
            $('.over65div .visitorname').append(data.teams[1].team);
            $('.over65div .league').append(numeral(data.gameStats[2].over65).format('0.0%'));
            $('.over65div .home').append(numeral(data.gameStats[0].over65).format('0.0%'));
            $('.over65div .visitor').append(numeral(data.gameStats[1].over65).format('0.0%'));
            $('.over65div .avg').append(numeral(data.gameStatsMath.over65AVG).format('0.0%'));
            $('.over65div .diff').append(numeral(data.gameStatsMath.over65DIFF).format('0.0%'));

            //INSERT PERIODSTATS

            //1st PERIOD
            $('.1stover15div .homename').append(data.teams[0].team);
            $('.1stover15div .visitorname').append(data.teams[1].team);
            $('.1stover15div .league').append(numeral(data.periodStats[2].stOver15).format('0.0%'));
            $('.1stover15div .home').append(numeral(data.periodStats[0].stOver15).format('0.0%'));
            $('.1stover15div .visitor').append(numeral(data.periodStats[1].stOver15).format('0.0%'));
            $('.1stover15div .avg').append(numeral(data.periodStatsMath.stOver15AVG).format('0.0%'));
            $('.1stover15div .diff').append(numeral(data.periodStatsMath.stOver15DIFF).format('0.0%'));

            $('.1stover25div .homename').append(data.teams[0].team);
            $('.1stover25div .visitorname').append(data.teams[1].team);
            $('.1stover25div .league').append(numeral(data.periodStats[2].stOver25).format('0.0%'));
            $('.1stover25div .home').append(numeral(data.periodStats[0].stOver25).format('0.0%'));
            $('.1stover25div .visitor').append(numeral(data.periodStats[1].stOver25).format('0.0%'));
            $('.1stover25div .avg').append(numeral(data.periodStatsMath.stOver25AVG).format('0.0%'));
            $('.1stover25div .diff').append(numeral(data.periodStatsMath.stOver25DIFF).format('0.0%'));

            //2nd PERIOD
            $('.2ndover15div .homename').append(data.teams[0].team);
            $('.2ndover15div .visitorname').append(data.teams[1].team);
            $('.2ndover15div .league').append(numeral(data.periodStats[2].ndOver15).format('0.0%'));
            $('.2ndover15div .home').append(numeral(data.periodStats[0].ndOver15).format('0.0%'));
            $('.2ndover15div .visitor').append(numeral(data.periodStats[1].ndOver15).format('0.0%'));
            $('.2ndover15div .avg').append(numeral(data.periodStatsMath.ndOver15AVG).format('0.0%'));
            $('.2ndover15div .diff').append(numeral(data.periodStatsMath.ndOver15DIFF).format('0.0%'));

            $('.2ndover25div .homename').append(data.teams[0].team);
            $('.2ndover25div .visitorname').append(data.teams[1].team);
            $('.2ndover25div .league').append(numeral(data.periodStats[2].ndOver25).format('0.0%'));
            $('.2ndover25div .home').append(numeral(data.periodStats[0].ndOver25).format('0.0%'));
            $('.2ndover25div .visitor').append(numeral(data.periodStats[1].ndOver25).format('0.0%'));
            $('.2ndover25div .avg').append(numeral(data.periodStatsMath.ndOver25AVG).format('0.0%'));
            $('.2ndover25div .diff').append(numeral(data.periodStatsMath.ndOver25DIFF).format('0.0%'));

            //3rd PERIOD
            $('.3rdover15div .homename').append(data.teams[0].team);
            $('.3rdover15div .visitorname').append(data.teams[1].team);
            $('.3rdover15div .league').append(numeral(data.periodStats[2].rdOver15).format('0.0%'));
            $('.3rdover15div .home').append(numeral(data.periodStats[0].rdOver15).format('0.0%'));
            $('.3rdover15div .visitor').append(numeral(data.periodStats[1].rdOver15).format('0.0%'));
            $('.3rdover15div .avg').append(numeral(data.periodStatsMath.rdOver15AVG).format('0.0%'));
            $('.3rdover15div .diff').append(numeral(data.periodStatsMath.rdOver15DIFF).format('0.0%'));

            $('.3rdover25div .homename').append(data.teams[0].team);
            $('.3rdover25div .visitorname').append(data.teams[1].team);
            $('.3rdover25div .league').append(numeral(data.periodStats[2].rdOver25).format('0.0%'));
            $('.3rdover25div .home').append(numeral(data.periodStats[0].rdOver25).format('0.0%'));
            $('.3rdover25div .visitor').append(numeral(data.periodStats[1].rdOver25).format('0.0%'));
            $('.3rdover25div .avg').append(numeral(data.periodStatsMath.rdOver25AVG).format('0.0%'));
            $('.3rdover25div .diff').append(numeral(data.periodStatsMath.rdOver25DIFF).format('0.0%'));

            //INSERT SCORECOUNTER
            //TEAMS
            $('.hometeam-scorecounter-div a').first().append(data.teams[0].team);
            $('.visitorteam-scorecounter-div a').first().append(data.teams[1].team);
            //WINS AND LOSSES
            $('.hometeam-scorecounter-win-div a').append('wins (' + data.margins[0].winGameCount + ')');
            $('.hometeam-scorecounter-loss-div a').append('losses (' + data.margins[1].lossGameCount + ')');
            $('.visitorteam-scorecounter-win-div a').append('wins (' + data.margins[2].winGameCount + ')');
            $('.visitorteam-scorecounter-loss-div a').append('losses (' + data.margins[3].lossGameCount + ')');
            //WIN
            //HOMETEAM
            $('.hometeam-scorecounter-win-div .scored0').append(numeral(data.scoreCounters[0].scored0).format('0.0%'));
            $('.hometeam-scorecounter-win-div .scored1').append(numeral(data.scoreCounters[0].scored1).format('0.0%'));
            $('.hometeam-scorecounter-win-div .scored2').append(numeral(data.scoreCounters[0].scored2).format('0.0%'));
            $('.hometeam-scorecounter-win-div .scored3').append(numeral(data.scoreCounters[0].scored3).format('0.0%'));
            $('.hometeam-scorecounter-win-div .scored4').append(numeral(data.scoreCounters[0].scored4).format('0.0%'));
            $('.hometeam-scorecounter-win-div .scored5').append(numeral(data.scoreCounters[0].scored5).format('0.0%'));
            $('.hometeam-scorecounter-win-div .scored6').append(numeral(data.scoreCounters[0].scored6).format('0.0%'));
            $('.hometeam-scorecounter-win-div .scoredMore').append(numeral(data.scoreCounters[0].scoredMore).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowed0').append(numeral(data.scoreCounters[0].allowed0).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowed1').append(numeral(data.scoreCounters[0].allowed1).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowed2').append(numeral(data.scoreCounters[0].allowed2).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowed3').append(numeral(data.scoreCounters[0].allowed3).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowed4').append(numeral(data.scoreCounters[0].allowed4).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowed5').append(numeral(data.scoreCounters[0].allowed5).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowed6').append(numeral(data.scoreCounters[0].allowed6).format('0.0%'));
            $('.hometeam-scorecounter-win-div .allowedMore').append(numeral(data.scoreCounters[0].allowedMore).format('0.0%'));
            //LOSS
            //HOMETEAM
            $('.hometeam-scorecounter-loss-div .scored0').append(numeral(data.scoreCounters[1].scored0).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .scored1').append(numeral(data.scoreCounters[1].scored1).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .scored2').append(numeral(data.scoreCounters[1].scored2).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .scored3').append(numeral(data.scoreCounters[1].scored3).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .scored4').append(numeral(data.scoreCounters[1].scored4).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .scored5').append(numeral(data.scoreCounters[1].scored5).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .scored6').append(numeral(data.scoreCounters[1].scored6).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .scoredMore').append(numeral(data.scoreCounters[1].scoredMore).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowed0').append(numeral(data.scoreCounters[1].allowed0).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowed1').append(numeral(data.scoreCounters[1].allowed1).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowed2').append(numeral(data.scoreCounters[1].allowed2).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowed3').append(numeral(data.scoreCounters[1].allowed3).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowed4').append(numeral(data.scoreCounters[1].allowed4).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowed5').append(numeral(data.scoreCounters[1].allowed5).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowed6').append(numeral(data.scoreCounters[1].allowed6).format('0.0%'));
            $('.hometeam-scorecounter-loss-div .allowedMore').append(numeral(data.scoreCounters[1].allowedMore).format('0.0%'));
            
            //WIN
            //VISITORTEAM
            $('.visitorteam-scorecounter-win-div .scored0').append(numeral(data.scoreCounters[2].scored0).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .scored1').append(numeral(data.scoreCounters[2].scored1).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .scored2').append(numeral(data.scoreCounters[2].scored2).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .scored3').append(numeral(data.scoreCounters[2].scored3).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .scored4').append(numeral(data.scoreCounters[2].scored4).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .scored5').append(numeral(data.scoreCounters[2].scored5).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .scored6').append(numeral(data.scoreCounters[2].scored6).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .scoredMore').append(numeral(data.scoreCounters[2].scoredMore).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowed0').append(numeral(data.scoreCounters[2].allowed0).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowed1').append(numeral(data.scoreCounters[2].allowed1).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowed2').append(numeral(data.scoreCounters[2].allowed2).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowed3').append(numeral(data.scoreCounters[2].allowed3).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowed4').append(numeral(data.scoreCounters[2].allowed4).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowed5').append(numeral(data.scoreCounters[2].allowed5).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowed6').append(numeral(data.scoreCounters[2].allowed6).format('0.0%'));
            $('.visitorteam-scorecounter-win-div .allowedMore').append(numeral(data.scoreCounters[2].allowedMore).format('0.0%'));

            //LOSS
            //VISITORTEAM
            $('.visitorteam-scorecounter-loss-div .scored0').append(numeral(data.scoreCounters[3].scored0).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .scored1').append(numeral(data.scoreCounters[3].scored1).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .scored2').append(numeral(data.scoreCounters[3].scored2).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .scored3').append(numeral(data.scoreCounters[3].scored3).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .scored4').append(numeral(data.scoreCounters[3].scored4).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .scored5').append(numeral(data.scoreCounters[3].scored5).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .scored6').append(numeral(data.scoreCounters[3].scored6).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .scoredMore').append(numeral(data.scoreCounters[3].scoredMore).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowed0').append(numeral(data.scoreCounters[3].allowed0).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowed1').append(numeral(data.scoreCounters[3].allowed1).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowed2').append(numeral(data.scoreCounters[3].allowed2).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowed3').append(numeral(data.scoreCounters[3].allowed3).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowed4').append(numeral(data.scoreCounters[3].allowed4).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowed5').append(numeral(data.scoreCounters[3].allowed5).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowed6').append(numeral(data.scoreCounters[3].allowed6).format('0.0%'));
            $('.visitorteam-scorecounter-loss-div .allowedMore').append(numeral(data.scoreCounters[3].allowedMore).format('0.0%'));

            //INSERT WIN/LOSS MARGINS
            //TEAMS
            $('.hometeam-winmargin-div a').first().append(data.teams[0].team);
            $('.visitorteam-winmargin-div a').first().append(data.teams[1].team);
            //WINS AND LOSSES
            $('.hometeam-winmargin-div .wins').append('wins (' + data.margins[0].winGameCount + ')');
            $('.hometeam-winmargin-div .losses').append('losses (' + data.margins[1].lossGameCount + ')');
            $('.visitorteam-winmargin-div .wins').append('wins (' + data.margins[2].winGameCount + ')');
            $('.visitorteam-winmargin-div .losses').append('losses (' + data.margins[3].lossGameCount + ')');
            //HOMETEAM
            $('.hometeam-winmargin-div .winmargin1').append(numeral(data.margins[0].margin1).format('0.0%'));
            $('.hometeam-winmargin-div .winmargin2').append(numeral(data.margins[0].margin2).format('0.0%'));
            $('.hometeam-winmargin-div .winmargin3').append(numeral(data.margins[0].margin3).format('0.0%'));
            $('.hometeam-winmargin-div .winmargin4').append(numeral(data.margins[0].margin4).format('0.0%'));
            $('.hometeam-winmargin-div .winmarginMore').append(numeral(data.margins[0].marginMore).format('0.0%'));
            $('.hometeam-winmargin-div .lossmargin1').append(numeral(data.margins[1].margin1).format('0.0%'));
            $('.hometeam-winmargin-div .lossmargin2').append(numeral(data.margins[1].margin2).format('0.0%'));
            $('.hometeam-winmargin-div .lossmargin3').append(numeral(data.margins[1].margin3).format('0.0%'));
            $('.hometeam-winmargin-div .lossmargin4').append(numeral(data.margins[1].margin4).format('0.0%'));
            $('.hometeam-winmargin-div .lossmarginMore').append(numeral(data.margins[1].marginMore).format('0.0%'));
            //VISITORTEAM
            $('.visitorteam-winmargin-div .winmargin1').append(numeral(data.margins[2].margin1).format('0.0%'));
            $('.visitorteam-winmargin-div .winmargin2').append(numeral(data.margins[2].margin2).format('0.0%'));
            $('.visitorteam-winmargin-div .winmargin3').append(numeral(data.margins[2].margin3).format('0.0%'));
            $('.visitorteam-winmargin-div .winmargin4').append(numeral(data.margins[2].margin4).format('0.0%'));
            $('.visitorteam-winmargin-div .winmarginMore').append(numeral(data.margins[2].marginMore).format('0.0%'));
            $('.visitorteam-winmargin-div .lossmargin1').append(numeral(data.margins[3].margin1).format('0.0%'));
            $('.visitorteam-winmargin-div .lossmargin2').append(numeral(data.margins[3].margin2).format('0.0%'));
            $('.visitorteam-winmargin-div .lossmargin3').append(numeral(data.margins[3].margin3).format('0.0%'));
            $('.visitorteam-winmargin-div .lossmargin4').append(numeral(data.margins[3].margin4).format('0.0%'));
            $('.visitorteam-winmargin-div .lossmarginMore').append(numeral(data.margins[3].marginMore).format('0.0%'));


            console.log(data);
        })
    });
}