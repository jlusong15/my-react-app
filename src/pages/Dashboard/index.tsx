// export default function Dashboard() {
const Dashboard = ({ children, contentt } : { children: string, contentt: string }) => {
	return children || contentt || 'wala eh';	
}

export default Dashboard