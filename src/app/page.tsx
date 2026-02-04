import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Home = async () => {
	return (
		<div className="flex-grow flex flex-col bg-cover bg-fixed bg-center bg-farm">
			<div className="flex-grow flex flex-col items-center backdrop-contrast-75">
				{/*<h1 className="md:text-6xl text-4xl font-bold text-sky-950 mt-5 uppercase">SSD Farms LLC.</h1>*/}
				<Image
					src={logo}
					alt={"SSD Farms Logo"}
					className={"max-h-64 w-auto"}
				/>
				<div className="mx-5 mt-10 rounded-lg py-5 px-5 backdrop-blur-sm bg-white/30">
					{/*<Image src={pic} alt={"SSD Farms storage unit"} className="rounded-lg"/>*/}
					<h1 className={"text-2xl text-sky-800"}>
						Storage facility (and so much more) in beautiful Shell Knob, MO.
					</h1>
				</div>
				<div className={"flex mt-10"}>
					<button
						type={"button"}
						className={"bg-sky-950 text-white px-5 py-2 rounded-lg"}
					>
						<Link href={"/storage"}>Show me storage!</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
