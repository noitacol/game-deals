export const ErrorMessage = ({ message }: { message: string }) => (
  <div className="bg-red-500/10 border border-red-500 p-4 rounded-lg">
    <p className="text-red-500">{message}</p>
  </div>
) 