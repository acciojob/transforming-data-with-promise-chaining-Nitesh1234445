let input = document.getElementById('ip');
let btn = document.getElementById('btn');
let output = document.getElementById('output');


function promise1(data){
		return new Promise((res) => {
			setTimeout(() => {
				res(data);	
			},2000);
		})
	}

	function promise2(data){
		return new Promise((res) => {
			setTimeout(() => {
				res(data*2);
			},2000);
		})
	}

	function promise3(data){
		return new Promise((res) => {
			setTimeout(() => {
				res(data-3);
			},1000);
		})
	}


	function promise4(data){
		return new Promise((res) => {
			setTimeout(() => {
				res(data/2);
			},1000);
		})
	}


	function promise5(data){
		return new Promise((res) => {
			setTimeout(() => {
				res(data+10);
			},1000);
		})
	}
	
	
btn.addEventListener("click" , () => {
    let data = Number(input.value);

	promise1(data).then((data) => {
		output.textContent = `Result: ${data}`;
		return promise2(data);
	}).then((data) => {
		output.textContent = `Result: ${data}`;
		return promise3(data);
	}).then((data) => {
		output.textContent = `Result: ${data}`;
		return promise4(data);
	}).then((data) => {
		output.textContent = `Result: ${data}`;
		return promise5(data);
	}).then((data) => {
	  		output.textContent = `Final Result: ${data}`;
	})

	
})