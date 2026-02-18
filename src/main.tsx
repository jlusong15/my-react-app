import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router"
import { Provider } from "react-redux"
import { store } from "./store"
import { TooltipProvider } from "@/components/ui/tooltip"

const root = document.getElementById("root")!

createRoot(root).render(
	<BrowserRouter>
		<Provider store={store}>
			<TooltipProvider>
				<App />
			</TooltipProvider>
		</Provider>
	</BrowserRouter>,
)
