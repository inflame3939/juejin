import React, { useState, useEffect } from "react";
import ApiArt from '../ApiArt'

const THRESHOLD = 15;
 
const SlidingWindowScrollHook = (props) =>  {
  const [start, setStart] = useState(0);
  const [llist, setLlist] = useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15}]);
  const [end, setEnd] = useState(THRESHOLD);
  const [scrollHeight, setScrollHeight] = useState({});
  const [more, setMore] = useState(0);
  const { showcate , categoryId1 , sortBy , showhistory , height} = props
  const [hasmore,setHasmore] = useState(true);

  const ScollPostion = () => {
    let t
    if (document.documentElement && document.documentElement.scrollTop) {
      t = document.documentElement.scrollTop
    } else if (document.body) {
      t = document.body.scrollTop
    }
    return {
      top: t
    }
  }
  
  useEffect(() => {
    document.documentElement.addEventListener('touchmove', (e) => {
      const timer = setTimeout((_) => {
        const postion = ScollPostion()
        setScrollHeight( postion.top )
        clearTimeout(timer)
      }, 300)
    })
  },[end])

  useEffect(()=>{
    setLlist([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15}])
    setEnd(15)
    setMore(0)
    setHasmore(true)
  },[showcate,categoryId1])

  const has_more=()=>{
    setHasmore(false)
  }
  const articleid = (article_id) =>{
    props.getdata4(article_id)
  }
  const listLength = 720;
  if ( scrollHeight> (((more+1) *1420)-420)  && hasmore ===true && !showhistory ) {
    const maxStartIndex = listLength - 1 - THRESHOLD; 
    const maxEndIndex = listLength - 1;
    const newEnd = (end + 10) <= maxEndIndex ? end + 10 : maxEndIndex;
    const newStart = (end - 5) <= maxStartIndex ? end - 5 : maxStartIndex;
    setLlist([...llist,{id:16+10*more},{id:17+10*more},{id:18+10*more},{id:19+10*more},{id:20+10*more},{id:21+10*more},{id:22+10*more},{id:23+10*more},{id:24+10*more},{id:25+10*more}])
    setMore(more+1)
    setStart(newStart)
    setEnd(newEnd)
  }
  
  return (
    <div style={{position: 'relative'}}>
      {llist.map((item, index) => {
        const top = (height * (index + start)) + 'px';
        return ( 
          <ApiArt articleid={articleid} sortBy={sortBy} has_more={has_more} hasmore={hasmore} showcate={showcate} categoryId1={categoryId1} iitem={item.id-1} key={item.id-1} style={{top}} limit={item.id} id={item.id}/>
        );
      })}
    </div>
  );
}
export { SlidingWindowScrollHook };
