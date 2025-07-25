import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card'

type SummaryProps = {
  amount: string,
  title: string,
  child: string[]
}
// const Insight = ({ title, desc, child }: SummaryProps): JSX.Element => {
const Summary: React.FC<SummaryProps> = ({ amount, title, child }) => {
  return (
    <div className="w-full">
      <div className="flex">
        <Card>
          <CardHeader>
            <CardTitle>{amount}</CardTitle>
            <CardDescription>{title}</CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default Summary