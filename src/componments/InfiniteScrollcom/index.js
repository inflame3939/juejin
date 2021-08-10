import React, { useState, useEffect } from "react";
import Com from '../Com'

const THRESHOLD = 15;
 
const SlidingWindowScrollHook = (props) =>  {
  const [llist, setLlist] = useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15}]);
  const [end, setEnd] = useState(THRESHOLD);
  // const [observer, setObserver] = useState(null);
  const [scrollHeight, setScrollHeight] = useState({});
  const [scrollH, setScrollH] = useState({});
  const [more, setMore] = useState(0);
  const { showcate , categoryId1 , sortBy, article_id } = props
  const [hasmore,setHasmore] = useState(true);

  const ScollPostion = () => {
    let t, h
    // , l, w

    if (document.documentElement && document.documentElement.scrollTop) {
      t = document.documentElement.scrollTop
      // l = document.documentElement.scrollLeft
      // w = document.documentElement.scrollWidth
      h = document.documentElement.scrollHeight
    } else if (document.body) {
      t = document.body.scrollTop
      // l = document.body.scrollLeft
      // w = document.body.scrollWidth
      h = document.body.scrollHeight
    }
    return {
      top: t,
      // left: l,
      // width: w,
      height: h,
    }
  }
  
  useEffect(() => {
    document.documentElement.addEventListener('touchmove', (e) => {
      const timer = setTimeout((_) => {
        const postion = ScollPostion()
        // console.log('滑动距离为：', postion)
        setScrollH( postion.height )
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
  const listLength = 720;
  if ( (scrollHeight>  (scrollH - 700 )) && more < 10 ) {
    // console.log((scrollHeight-  (scrollH - 700 )));
    // console.log(scrollHeight,scrollH);
    // console.log('shuashuashua',more,end,hasmore);
    const maxEndIndex = listLength - 1;                   // Maximum index value `end` can take
    const newEnd = (end + 10) <= maxEndIndex ? end + 10 : maxEndIndex;
    if(more<10){
    setLlist([...llist,{id:16+10*more},{id:17+10*more},{id:18+10*more},{id:19+10*more},{id:20+10*more},{id:21+10*more},{id:22+10*more},{id:23+10*more},{id:24+10*more},{id:25+10*more}])
    setMore(more+1)
    setEnd(newEnd)} 
  }
  
  return (
    <div style={{position: 'relative'}}>
      {llist.map((item, index) => 
          <Com article_id={article_id} sortBy={sortBy} has_more={has_more} hasmore={hasmore} showcate={showcate} categoryId1={categoryId1} iitem={item.id-1} key={item.id} limit={item.id} id={item.id}/>
      )}
    </div>
  );
}
export { SlidingWindowScrollHook };
