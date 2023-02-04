/* find certain concert and location to it*/

/* find concert by alt */
const concert = document.querySelectorAll("a > div.imgBox > img[alt='HAB presents mid-tv スペシャルライブ']");

/* pick up href and location to it */
if (concert){
    const concerturl = concert[0].parentNode.parentNode;
    const concertherf = concerturl["href"];
    window.location.href = concerturl["href"];
}





