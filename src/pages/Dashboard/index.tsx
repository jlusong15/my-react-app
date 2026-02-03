export default function Dashboard({ children, content }: { children: string; content: string }) {
	return children || content || <></>
}
