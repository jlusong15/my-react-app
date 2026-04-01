import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { store } from "./store"

// Require Editor CSS files.
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import ScrollToTop from "./components/ScrollToTop"

const root = document.getElementById("root")!

createRoot(root).render(
	<BrowserRouter>
		<ScrollToTop />
		<Provider store={store}>
			<TooltipProvider>
				<App />
			</TooltipProvider>
			<Toaster />
		</Provider>
	</BrowserRouter>,
)
