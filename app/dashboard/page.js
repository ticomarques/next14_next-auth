import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation';

async function Dashboard() {

    const seesion = await getServerSession()

    if(!seesion){
        redirect('/')
    }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>User sucessfully logged in...</h1>
    </div>
  )
}

export default Dashboard