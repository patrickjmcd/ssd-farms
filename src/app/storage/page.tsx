import Link from "next/link";

const StoragePage = () => {
	return (
		<div
			className={
				"flex-grow flex flex-col bg-cover bg-fixed bg-center bg-storage"
			}
		>
			<div className="flex-grow flex flex-col items-center backdrop-contrast-50">
				<h1 className="md:text-6xl text-4xl font-bold text-sky-950 uppercase mt-10">
					Storage at SSD Farms LLC.
				</h1>
				<div className={"mt-20 text-sky-200 bg-sky-800 px-10 py-5 rounded-xl"}>
					<p>
						The storage facility houses 9 bays sized 12' x 30'. Each bay is
						equipped with a 10' x 12' door.
					</p>
					<p className={"mt-10"}>
						To inquire about availability, please{" "}
						<Link className="hover:underline font-bold" href={"/contact-us"}>
							contact us!
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default StoragePage;
