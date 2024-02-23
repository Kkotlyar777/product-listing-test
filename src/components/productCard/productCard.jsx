import style from './productCard.module.sass';

function Card() {
	return (
		<div className={style.CardCont}>
			<div className={style.svgCont}>
				<svg
					width="184"
					height="184"
					viewBox="0 0 184 184"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_48_116)">
						<path
							d="M184 92C184 142.81 142.81 184 92 184C41.1898 184 0 142.81 0 92C0 41.1898 41.1898 0 92 0C142.81 0 184 41.1898 184 92ZM5.93571 92C5.93571 139.532 44.468 178.064 92 178.064C139.532 178.064 178.064 139.532 178.064 92C178.064 44.468 139.532 5.93571 92 5.93571C44.468 5.93571 5.93571 44.468 5.93571 92Z"
							fill="#CCCCCC"
						/>
						<path
							d="M31.2322 152.232L156.232 27.2322"
							stroke="#CCCCCC"
							stroke-width="5"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M91.5 68.625C77.2096 68.625 65.625 80.2096 65.625 94.5C65.625 108.79 77.2096 120.375 91.5 120.375C105.79 120.375 117.375 108.79 117.375 94.5C117.375 80.2096 105.79 68.625 91.5 68.625ZM57 94.5C57 75.4462 72.4462 60 91.5 60C110.554 60 126 75.4462 126 94.5C126 113.554 110.554 129 91.5 129C72.4462 129 57 113.554 57 94.5Z"
							fill="#CCCCCC"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M81.2188 43.6154C78.504 43.6154 75.9476 44.8921 74.3187 47.0615L69.1437 53.9538C65.886 58.2927 60.7733 60.8462 55.3438 60.8462H44.5625C37.4173 60.8462 31.625 66.632 31.625 73.7692V125.462C31.625 132.599 37.4173 138.385 44.5625 138.385H139.438C146.583 138.385 152.375 132.599 152.375 125.462V73.7692C152.375 66.632 146.583 60.8462 139.438 60.8462H128.656C123.227 60.8462 118.114 58.2927 114.856 53.9538L109.681 47.0615C108.052 44.8921 105.496 43.6154 102.781 43.6154H81.2188ZM67.4188 41.8923C70.6765 37.5535 75.7892 35 81.2188 35H102.781C108.211 35 113.324 37.5535 116.581 41.8923L121.756 48.7846C123.385 50.954 125.941 52.2308 128.656 52.2308H139.438C151.346 52.2308 161 61.8739 161 73.7692V125.462C161 137.357 151.346 147 139.438 147H44.5625C32.6539 147 23 137.357 23 125.462V73.7692C23 61.8739 32.6539 52.2308 44.5625 52.2308H55.3438C58.0585 52.2308 60.6149 50.954 62.2438 48.7846L67.4188 41.8923Z"
							fill="#CCCCCC"
						/>
					</g>
					<defs>
						<clipPath id="clip0_48_116">
							<rect width="184" height="184" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>

			<div className={style.NameTxt}>Золотое кольцо с бриллиантами</div>
			<div className={style.PriceTxt}>₽ 675.00</div>
			<div className={style.idTxt}>
				id:
				<br />
				<span>1789ecf3-f81c-4f49-ada2-83804dcc74b0</span>
			</div>
			<div className={style.brandTxt}>
				бренд: <br />
				<span>null</span>
			</div>
		</div>
	);
}

export default Card;
