module.exports = function toReadable (number) {
    let oneToNineteen=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let twentyToNinety=[':)',';)','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    if(number<20){
        return oneToNineteen[number];
    }
    if(number>=20 && number<100 && number.toString()[1]==0){
        return twentyToNinety[Number(number.toString()[0])];
    }
    if(number>=20 && number<100){
        return twentyToNinety[Number(number.toString()[0])]+' '+oneToNineteen[Number(number.toString()[1])];
    }
    if(number>=100 && Number(number.toString().slice(1,3))==0){
        return  oneToNineteen[Number(number.toString()[0])]+' '+'hundred';
    }
    if(number>100 && Number(number.toString().slice(1,3))<20){
        return oneToNineteen[Number(number.toString()[0])]+' '+'hundred'+' '+oneToNineteen[Number(number.toString().slice(1,3))]
    }
    if(number>100 && Number(number.toString().slice(1,3))>=20 && Number(number.toString()[2])==0){
        return oneToNineteen[Number(number.toString()[0])]+' '+'hundred'+ ' '+twentyToNinety[Number(number.toString()[1])]
    }
    if(number>100 && Number(number.toString().slice(1,3))>20){
        return oneToNineteen[Number(number.toString()[0])]+' '+'hundred'+" "+twentyToNinety[Number(number.toString()[1])]+' '+oneToNineteen[Number(number.toString()[2])];
    }
}
