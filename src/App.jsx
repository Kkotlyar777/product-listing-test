import style from './App.module.sass';
import Card from './components/productCard/productCard';
import Pages from './components/pagesDiv/pagesDiv';

function App() {
	return (
		<div className={style.App}>
			<section className={style.Sidebar}>
				<div className={style.mainFilterCont}>
					<form action="">
						<div className={style.nameFilterCont}>
							<h2 className={style.filterTitle}>Название</h2>
							<input
								className={style.filterInputTxt}
								type="text"
								placeholder="введите название..."
							/>
							<span className={style.filtersLine}></span>
						</div>
						<div className={style.priceFilterCont}>
							<h2 className={style.filterTitle}>Цена</h2>
							<div className={style.filterInputNumDiv}>
								<input
									className={style.filterInputNum}
									placeholder="от"
									type="number"
								/>
								<input
									className={style.filterInputNum}
									placeholder="до"
									type="number"
								/>
							</div>
							<span className={style.filtersLine}></span>
						</div>
						<div className={style.brandFilterCont}>
							<h2 className={style.filterTitle}>Бренд</h2>
							<input
								className={style.filterInputTxt}
								type="text"
								placeholder="введите бренд..."
							/>
							<span className={style.filtersLine}></span>
						</div>
						<div className={style.filterBtnDiv}>
							<button className={style.filterBtn}>фильтровать</button>
						</div>
					</form>
				</div>
			</section>
			<section className={style.ItemList}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<div className={style.pagesList}>
					<Pages />
					<Pages />
					<Pages />
					<Pages />
					<Pages />
					<Pages />
					<Pages />
				</div>
			</section>
		</div>
	);
}

export default App;
