
import { useState } from "react";
import '../components/Todo.css';
export default function Todo() {
    const[list,setList] = useState<string[]>([]);
    const [value,setValue] = useState<string>("");
    const [updateIndex ,setUpdateIndex] = useState<number | undefined>();
    const [updateText,setUpdateText] = useState<string>("");
    const [searchText,setSearchText] = useState<string>("");

    function renderListItem(listItem:string , index:number) {
       return( 
        <>
        <div className="note_container" key={index}>
        <div>{listItem}</div>
        <div className="btn_container">
        <button className="btn2" onClick={()=>
         {
          setUpdateText(listItem)
          setUpdateIndex(index)
         }}> Update </button>
        <button className="btn1" onClick={()=> onDeleteClick(index)}>Delete</button>
        </div>
        </div>
        </>
       )
    }

    function onDeleteClick(index: number){
        const newList =[...list]
        newList.splice(index,1);
        setList(newList);
    }

  return (
   <>
   <h2 className="heading">Todo App</h2>
    <input className="container" placeholder="Enter Your Notes Here" type="text" value={value} onChange={(e)=>(setValue(e.target.value))}/>
   <div className="btn_holder">
   <button className="btn" 
    onClick={()=>{
    setValue("");
    setList([...list,value])}}>Add Notes</button>
   </div>

   <input className="container" type="text" placeholder="Search For Notes Here" value={searchText} onChange={(e)=>(setSearchText(e.target.value))}/>

    {list.map(renderFilteredItems)}
   </>
  )

  function renderFilteredItems(listItem: string, index: number){
    if(listItem.toLowerCase().includes(searchText.toLowerCase())){
     return updateIndex===index ? renderUpdateItem(index):renderListItem(listItem,index);
    }
    return;
  }


function onUpdate( index:number){
  const newList =[...list]
  newList[index]= updateText
  setList(newList);
  setUpdateIndex(undefined);
  setUpdateText("");
}

function renderUpdateItem( index:number) {
  return(
  <div className="note_container" key={index}>
    <input className="sub_container" type="text" value={updateText} 
    onChange={(e)=>setUpdateText(e.target.value)} />
    <button className="btn3" onClick={()=> onUpdate(index)}> Done </button>
  </div>
  )
}

 
}

