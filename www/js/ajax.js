$(document).ready(function(){
        fetchSchedule();
        fetchPreGameStats();
        
});
            
function fetchSchedule() {
    $.ajax({
        url: "http://env-4416544.fi.cloudplatform.fi/hockeyseer/nhl/schedule.json"
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

        $.ajax({
            url: "http://env-4416544.fi.cloudplatform.fi/hockeyseer/nhl/schedule_"+$(this).data('menu-button')+".json"
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



            console.log(data);
        })
    });
}