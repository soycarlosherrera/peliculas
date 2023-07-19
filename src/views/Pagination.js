
export default function Pagination (props){

    const getPages = ()=>{
        const result = [];

        for(let i=0;i<props.total;i++){
            result.push(
            <a onClick={()=>{props.onChange(i+1)}} 
                className= {props.page===(i+1) ? 'active' : ''}>
                {(i+1)}
            </a>);
        }

        return result;
    }

    return(

        <div className="topbar-filter">
			<div className="pagination2">
				<span>Page {props.page} of {props.total}:</span>

                {getPages()}
				
			</div>
		</div>
    )

}