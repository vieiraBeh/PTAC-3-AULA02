import Link from "next/link";

export default function Menu(){
    return(
        <header>
            <h1>Menu</h1>
            <nav>
                <ul>
                    <link href="/">
                    <li>Home</li>
                    </link>

                    <link href="/registro">
                    <li>Registrar</li>
                    </link>
                </ul>
            </nav>
        </header>
    );
}