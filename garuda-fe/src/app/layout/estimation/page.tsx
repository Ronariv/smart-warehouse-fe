import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card'

type InsightProps = {
  bestDay: string,
  avgTrans: string,
  avgTransPerDay: string
}
const Insight: React.FC<InsightProps> = ({ bestDay, avgTrans, avgTransPerDay }) => {
  return (
    <div className="w-1/2">
      <div className="bg-white m-2 p-2 rounded-xl border shadow-sm">
        {/* <h2 className="p-2 font-bold">Predicted Demand</h2> */}
        <Card>
          <CardHeader>
            <CardTitle>Insight</CardTitle>
            <CardDescription></CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <ul className='list-disc pl-5'>
              <li>{ bestDay}</li>
              <li>{ avgTransPerDay}</li>
              <li>{ avgTrans}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Insight