import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card'

type SummaryProps = {
  title: string,
}
// const Insight = ({ title, desc, child }: SummaryProps): JSX.Element => {
const Summary: React.FC<SummaryProps> = ({ title }) => {
  return (
    <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle className='text-center text-2xl'>{title}</CardTitle>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
        </Card>
    </div>
  )
}

export default Summary