import './App.css';

function Iine() {
	function handleClick() {
		alert('お買い忘れの商品はございませんか？');
	}
	return (
		<div className='inner'>
			<button onClick={ handleClick }>カートに入れる</button>
		</div>
	);
}

export default Iine;

