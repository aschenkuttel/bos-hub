import { ComponentWrapperPage } from '@/components/ComponentWrapperPage'
import {db} from '@/lib/firebase/init'
import {getDoc, doc} from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'

export default function App({app}) {
    return (
        <div>
            <ComponentWrapperPage src={app.src} />
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const docRef = doc(db, 'apps', params.appId)
    const result = await getDoc(docRef)
    const appData = result.data()

    if (!appData) {
        return {
            notFound: true,
        }
    } else {
        return {
            props: {
                app: appData,
            },
        }
    }

}