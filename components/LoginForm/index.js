import CustomButton from '../util/Button'
import CustomSnackbar from '../util/CustomSnackbar'

export default function LoginForm() {
    return (
        <>
            <div className="flex flex-col w-full bg-red-100 max-w-md p-12 space-y-4 text-center rounded-xl border-2">
                <h1 className="text-3xl font-semibold">Inicia sesión en pequechés!</h1>
                <form noValidate="" className="space-y-4 ng-untouched ng-pristine ng-valid">
                    <div className="flex flex-col justify-around gap-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input id="email" type="email" placeholder="Email address" className="rounded-md focus:ring-violet-400 focus focus:ring-2" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" type="text" placeholder="Password" className="-mt-1 rounded-md focus:ring-violet-400 focus focus:ring-2" />
                        </div>
                    </div>
                    <CustomSnackbar
                        propSeverity='warning'
                        customMsg='Esta funcionalidad aún no está implementada'
                    >
                        <CustomButton className="px-8 py-3 space-x-2 font-semibold rounded">Iniciar</CustomButton>
                    </CustomSnackbar>
                </form>
            </div>
            <style jsx>{`
            h1 {
                color: #ca6666;
            }
            `}</style>
        </>
    )
}