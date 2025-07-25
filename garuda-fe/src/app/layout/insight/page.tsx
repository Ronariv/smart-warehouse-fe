import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card'

type InsightProps = {
  title: string,
  desc: string,
  child: MonthlyReport[]
}


interface MonthlyReport {
  bulan: string,
  omzet: number,
  tahun: number
}

// const Insight = ({ title, desc, child }: InsightProps): JSX.Element => {
const Insight: React.FC<InsightProps> = ({ title, desc, child }) => {
  return (
    <div className="w-full">
      <div className="m-2 p-2 h-full bg-white rounded-xl border shadow-sm">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {child.map((item, index) => (
                <li key={index}>
                  Rp {item.omzet} {item.bulan}-{item.tahun}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Insight