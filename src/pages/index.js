import * as React from "react";

export default function Page() {
	React.useEffect(() => {
		window.addEventListener("scroll", (event) => {
			checkScrolling(window.scrollY);
		});
	}, []);

	async function checkScrolling(scroll_value) {
    console.log(scroll_value)

		const show_items = document.querySelectorAll("[show]");
		const hide_items = document.querySelectorAll("[hide]");

		const elements_to_show = [];
		const elements_to_hide = [];

		show_items.forEach((item) => {
			const start_show = parseInt(item.getAttribute("show"), 10);
      const start_hide = parseInt(item.getAttribute("hide"), 10);
			if (scroll_value >= start_show && scroll_value <= start_hide) {
				elements_to_show.push(item.id);
			}
		});

		hide_items.forEach((item) => {
			const start_show = parseInt(item.getAttribute("show"), 10);
      const start_hide = parseInt(item.getAttribute("hide"), 10);
			if (scroll_value <= start_show || scroll_value >= start_hide) {
				elements_to_hide.push(item.id);
			}
		});

		for (const element of elements_to_show) {
			document.getElementById(element).classList.add("opacity-100");
			document.getElementById(element).classList.remove("opacity-0");
		}

		for (const element of elements_to_hide) {
			document.getElementById(element).classList.add("opacity-0");
			document.getElementById(element).classList.remove("opacity-100");
		}
	}

	return (
		<main>
			<div className="fixed">
				<div id="1" show="500" hide="800" className="h-10 w-20 bg-red-500 opacity-0">
          box 1
        </div>

        <div id="2" show="900" hide="1000" className="h-10 w-20 bg-green-500 opacity-0">
          box 2
        </div>
			</div>

			<div className="h-[120rem]"></div>
		</main>
	);
}
