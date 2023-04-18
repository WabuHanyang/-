import Link from 'next/link';

export default function Firstpost() {
    return(
        <div>
            <hi>Love</hi>
            <div>
                <Link href="/">back to home</Link>
            </div>    
            <div>
                <a href="/script.html">공부좀해라 김도현</a>
            </div>
        </div>
    );
}