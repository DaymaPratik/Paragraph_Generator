import { useState } from 'react';
import './MainSection.css';
const MainSection = () => {
    let dataArr=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend lorem cursus tempor accumsan. Nullam quis dui urna. Nulla a iaculis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque metus eu magna sodales efficitur. Praesent bibendum, nulla at faucibus efficitur, ante tellus ornare magna, in tincidunt elit nulla et nibh. Morbi nec ligula euismod, malesuada diam vel, viverra dolor. Aliquam id nisi a purus aliquet vestibulum sed eu justo. Morbi efficitur ac urna blandit posuere.",

    "Ut feugiat eros non dignissim finibus. Praesent vel mi magna. Morbi dignissim quis dui nec dapibus. Quisque consequat justo sed erat bibendum, nec egestas diam faucibus. Ut tincidunt sem in eros imperdiet, luctus porttitor nulla pellentesque. Nam finibus eleifend quam vitae tincidunt. Nulla pharetra mi elementum lorem eleifend, nec scelerisque velit condimentum. Nullam maximus ante ac finibus cursus. Nulla ornare, augue sed placerat condimentum, sapien arcu iaculis orci, in tincidunt arcu orci eu tortor. Curabitur faucibus diam gravida metus pharetra malesuada. Aenean ipsum enim, venenatis pellentesque elit eget, dapibus maximus sem. Duis mattis, ligula id faucibus ullamcorper, lacus sem vehicula odio, facilisis tincidunt sapien nibh a libero.",
    
    "Vestibulum viverra tristique dui, vitae feugiat felis ornare ac. Nam nec quam sed ex sagittis fringilla sed sed leo. Suspendisse tristique bibendum elit ut facilisis. Vestibulum rutrum odio egestas, volutpat arcu quis, facilisis mi. Pellentesque euismod convallis lacus iaculis pellentesque. Suspendisse varius elit urna, id ullamcorper eros dignissim sit amet. Ut et fermentum eros. Nulla blandit suscipit felis, ac elementum risus tincidunt vitae. Donec luctus nunc eu lacus pretium ultrices. Aenean nibh mi, luctus a placerat ut, vestibulum id orci. Nam nunc mi, tincidunt nec bibendum et, dapibus eget quam. Proin convallis tellus tellus, at volutpat eros venenatis ut. Fusce blandit, justo vel rhoncus porttitor, tortor magna mollis urna, sit amet maximus orci magna id purus.",
    
    "Phasellus sem lorem, tempus at placerat at, bibendum tempus odio. Morbi porttitor bibendum tellus. In hac habitasse platea dictumst. Vestibulum lobortis orci condimentum lectus aliquet ultrices. Suspendisse imperdiet blandit nisi sit amet tristique. Integer pretium tincidunt ex. Donec tristique blandit aliquet. Suspendisse sed massa sed magna tristique mattis. Donec et eleifend nulla. Aenean mi enim, bibendum eu quam vitae, sollicitudin lobortis enim. Morbi ut mi sapien. Sed quis ex purus. Vivamus maximus libero ac nibh congue mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    
    "Sed cursus, risus at consectetur rutrum, est orci ultricies nibh, sed malesuada quam quam quis orci. Vivamus at consequat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper augue ut mi porta fermentum. Duis porta ex ut enim scelerisque tristique. Sed ultrices tellus vitae magna tincidunt tristique. Suspendisse pulvinar efficitur dignissim. Proin consectetur sapien ut lacus euismod imperdiet eget et mauris. Duis varius dui in lorem tincidunt convallis. Ut sit amet porta massa. Aenean laoreet lacus lacus, et ultricies nulla efficitur a. Fusce mi justo, condimentum vitae quam at, facilisis vehicula erat.",
    
    "Proin sed rutrum lacus. Donec quam nibh, maximus ut dui sed, interdum dignissim est. Aenean dignissim tincidunt interdum. Phasellus mollis nulla id ligula porttitor malesuada. Nunc scelerisque massa orci, at luctus ante commodo a. Morbi aliquam tellus velit, quis malesuada erat semper eu. Nunc tristique condimentum faucibus.",
    
    "Curabitur magna purus, ornare ut erat vel, lobortis imperdiet felis. Quisque ullamcorper massa sed nunc dapibus ullamcorper. Pellentesque pellentesque sit amet elit id pharetra. Aenean ut orci eu justo dictum elementum. Aenean convallis posuere hendrerit. Pellentesque at tincidunt enim. Phasellus vulputate odio non lobortis commodo. Maecenas porta quam euismod velit ultricies, in dictum libero tempus. Maecenas elit augue, vehicula eu nulla quis, rhoncus consectetur leo. Sed scelerisque nulla volutpat, molestie dui quis, accumsan quam. Vivamus quis ante at lectus accumsan tempus non ultrices nunc. Phasellus felis ipsum, ullamcorper vitae erat ac, tincidunt vestibulum ipsum. Fusce ut orci eu sem aliquam laoreet.",
    
    "Donec condimentum ante mi, ut convallis nisl tincidunt eget. Donec venenatis a dui non condimentum. Donec venenatis orci id malesuada dignissim. Etiam ipsum ligula, sagittis nec metus a, pharetra elementum orci. Fusce quam velit, tincidunt non congue ut, malesuada ut risus. Suspendisse dapibus orci ligula, nec ullamcorper orci euismod at. Sed odio justo, egestas id convallis quis, feugiat sit amet nibh. Aliquam erat volutpat. Nam sed dapibus sapien, vel malesuada turpis. Donec at dapibus eros. In consectetur efficitur odio eu pretium. Suspendisse fermentum nulla ut lectus vestibulum dapibus.",
    
    "Fusce feugiat sagittis arcu eget maximus. Sed tempor ligula vel nibh aliquam, semper auctor mi malesuada. Duis tempor luctus velit id blandit. Praesent vel libero sollicitudin, convallis orci eu, viverra neque. Suspendisse potenti. Duis sit amet aliquet risus. Nullam pretium pharetra nibh, nec facilisis ante finibus non. Pellentesque enim augue, maximus ultricies imperdiet id, cursus ac lacus. Curabitur vitae diam neque. Vivamus placerat sed ex sed aliquet. Integer tempor vulputate tincidunt. Nam mauris risus, pharetra ut velit in, lacinia tristique quam. Nunc sed imperdiet leo. Nunc non risus imperdiet, iaculis nisi non, commodo nibh. In dapibus porta urna, nec bibendum neque condimentum a. Quisque viverra mi ut nisl maximus, nec posuere massa blandit.",
    
    "Nam in egestas libero. Maecenas elementum massa enim, vitae consequat ex condimentum at. Sed egestas tristique lorem ac mollis. Ut aliquam fringilla mi, cursus interdum orci sagittis quis. In hendrerit nunc ac nunc vulputate dictum. Suspendisse pretium nulla vitae risus volutpat porttitor. Proin finibus purus sed gravida elementum. Aenean suscipit tellus ac neque vulputate, in cursus mi elementum. Nullam auctor et sem sit amet hendrerit. Donec iaculis, metus vel sollicitudin aliquet, massa quam aliquet lorem, rhoncus pulvinar mi enim in ex. Vivamus vehicula tincidunt luctus. Vivamus vitae dapibus elit. Fusce diam nisi, porttitor eu arcu vel, dignissim laoreet velit. Donec non sodales neque.",
    
    "Etiam at tellus leo. Nulla cursus libero nisi, nec rutrum mi pellentesque sed. In hac habitasse platea dictumst. Nullam ac diam eleifend, ornare orci non, lacinia turpis. Sed molestie gravida vulputate. Curabitur pharetra justo eget porta maximus. Mauris iaculis nisl nunc.",
    
    "Nullam a justo elementum, gravida enim at, venenatis eros. Mauris finibus sapien eget est convallis, at elementum augue dictum. Suspendisse sit amet eleifend quam. Donec quis ligula vel leo aliquet auctor. Maecenas euismod nulla condimentum neque luctus, tempus bibendum massa rhoncus. In vitae neque egestas, dapibus augue at, fringilla neque. Fusce blandit sollicitudin molestie. Quisque pharetra tempor nulla sit amet varius. Nam in tortor nec est sollicitudin aliquam. Fusce a tempor elit, et fermentum dui. Praesent ac dapibus metus. Donec eget dolor eros. Donec varius sagittis tellus, quis sodales orci egestas quis. Aliquam fringilla euismod sem, auctor ultricies metus accumsan sagittis.",
    
    "Curabitur dignissim commodo varius. Quisque arcu nibh, ornare vel semper non, sollicitudin ut lorem. Suspendisse tincidunt erat nunc, in condimentum felis laoreet at. Praesent nec tempus odio. Integer nec lacus eget libero mollis euismod. Sed eget suscipit metus. Nulla facilisi. Vestibulum finibus et ligula eu mattis. Nunc tristique arcu quis lorem laoreet, a accumsan est imperdiet. Praesent sed nisl et quam vestibulum porta. Donec at dui quis urna efficitur cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    
    "Maecenas ut ante in orci consequat ultrices. Proin condimentum ut risus vel aliquam. Mauris ligula sem, bibendum id viverra ac, euismod nec dolor. Curabitur sed ultricies eros. Suspendisse aliquam pulvinar justo eget varius. Nam in aliquam quam. Mauris sollicitudin, erat at ornare luctus, nisl sapien volutpat risus, vel accumsan arcu leo ac diam.",
    
    "Donec quis vehicula enim, at consectetur ante. Nunc eget odio ac erat blandit sagittis. Aenean bibendum pretium feugiat. Quisque at tortor dapibus, tincidunt sapien eget, auctor sapien. Vestibulum luctus elit eu faucibus mattis. Suspendisse ac eros nisl. Etiam egestas elementum arcu sed viverra. Etiam euismod, felis quis rutrum blandit, nisi massa porta risus, sed vulputate massa tellus quis eros. Nam in arcu nec odio maximus accumsan at et lectus. Sed volutpat metus nec lectus egestas, sed volutpat lectus iaculis. Integer tincidunt gravida magna nec sagittis. Praesent iaculis, mauris quis maximus volutpat, urna metus convallis mauris, vitae fringilla lectus orci et enim. Aliquam scelerisque sem odio, ut hendrerit nulla fermentum vitae. Aliquam accumsan eu lacus ut facilisis. Sed eget ipsum sed nibh tempus ornare condimentum laoreet nunc. Fusce posuere neque enim, ac luctus nulla tristique at.",
    
    "Suspendisse eleifend mauris sit amet elit laoreet facilisis in nec orci. Aliquam id vulputate nunc. In ultrices ultricies finibus. Praesent gravida porttitor vestibulum. Suspendisse nec consectetur diam, sit amet tincidunt dolor. Suspendisse id libero nec tortor elementum condimentum vitae eget elit. Morbi varius sagittis dui. Nunc eget elit mattis, maximus nisi ac, malesuada nibh. Phasellus hendrerit tincidunt luctus. Suspendisse hendrerit lorem velit, vel iaculis turpis suscipit id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim luctus ex, sit amet dapibus nisl hendrerit non. Nam cursus mauris luctus, placerat ligula ac, iaculis leo. Curabitur ornare nisl arcu, vel commodo nisl tempus id. Fusce lacinia eleifend libero, et placerat nulla cursus vitae. Proin egestas vulputate lectus, eget porttitor est imperdiet nec.",
    
    "Nunc id metus viverra, scelerisque libero a, tincidunt risus. Suspendisse id scelerisque ante. Nulla gravida mollis massa, sit amet posuere ligula eleifend laoreet. Morbi sed diam odio. Sed luctus quis felis accumsan consequat. Proin ornare egestas velit, nec malesuada tortor porttitor mattis. Etiam vestibulum ligula ipsum, vel faucibus orci elementum eget. Duis interdum diam libero, eu euismod purus hendrerit et. Phasellus nisl leo, tincidunt eu lacus non, ultricies elementum nisi. Sed tincidunt semper lorem, id posuere urna efficitur vel. Nunc sagittis ac est ut facilisis. Nam orci dolor, placerat congue accumsan id, vulputate quis velit. Fusce faucibus tincidunt justo non sollicitudin. Aenean fringilla eros id enim convallis cursus. Nam venenatis urna eu auctor ultrices. Nam justo massa, ullamcorper ut eleifend at, convallis et tellus.",
    
    "Nulla lobortis lacus id dolor sodales, eu tincidunt urna fringilla. Phasellus tempus augue non ligula interdum facilisis. Vestibulum vel nulla tristique, aliquam tortor quis, placerat libero. Sed consequat nunc ligula, non elementum lacus commodo aliquam. Phasellus auctor velit nec fringilla imperdiet. Aenean imperdiet tellus at quam cursus, vel egestas lorem tristique. Nunc accumsan massa vitae nulla posuere, in fringilla turpis viverra.",
    
    "Nunc id enim ultrices, luctus neque in, sagittis nisl. Etiam dictum sapien in lacus lacinia, ac elementum ligula tincidunt. Curabitur ultricies quam at fringilla egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius vestibulum nisi, nec sollicitudin velit fermentum eu. Praesent vehicula rhoncus magna, ut feugiat risus imperdiet luctus. Nam condimentum, arcu sed cursus varius, justo felis pharetra nunc, feugiat rutrum nunc sapien non quam. Vestibulum venenatis mi et eros fermentum aliquam. Quisque non luctus est, sit amet vehicula lorem. Donec quis ante lacus. Sed id velit eu sem ullamcorper sagittis. Curabitur luctus ipsum ac orci placerat vestibulum. Praesent vel felis neque. Nam quis finibus felis, sed ullamcorper nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    
    "Donec eget facilisis velit. Maecenas quis convallis arcu. Aenean pulvinar est eget vestibulum iaculis. Pellentesque sollicitudin bibendum lacus, pulvinar eleifend quam sodales at. Etiam iaculis sit amet ex sit amet pulvinar. Phasellus eget sollicitudin justo. Nulla eget tincidunt nisi. Curabitur ornare augue sit amet enim dapibus cursus porta venenatis elit. Pellentesque non libero sit amet turpis consequat molestie non et augue. Duis feugiat eget augue eu condimentum. Duis ac risus ipsum. Donec orci nibh, malesuada sed erat id, consectetur ullamcorper nisl. Vestibulum nec lacus in ipsum vehicula volutpat. Ut id dapibus ligula, hendrerit semper felis. Duis blandit arcu eu consectetur vestibulum. Mauris ultricies libero molestie, feugiat magna tincidunt, hendrerit odio."];
    let [paraArr,setParaArr]=useState([]);
    let [noPara,setNoPara]=useState(1)
    
    function showPara(){
        // let idx=noPara;
        if(noPara<0 || noPara>15){
            alert('Please Enter Valid Number');
        }
        setParaArr(dataArr.slice(0,noPara));
        setNoPara(1);
    }
    return (
        <main className='main-box'>
            <div className='ip-box'>
                <label htmlFor='ip-para-no' className='label-no'>Enter Number of Paragraphs:- </label>
                <input type="number" id='ip-para-no' value={noPara} onChange={(e)=>{setNoPara(e.target.value)}} />
                <button className='generate-btn' onClick={showPara}>Generate</button>
            </div>
            <div className='op-box'>
                {
                    paraArr.map((item,idx)=>{
                        return <p key={item+idx} className='op-para'>{item}</p>
                    })
                }
            </div>
        </main>
    );
}

export default MainSection;
