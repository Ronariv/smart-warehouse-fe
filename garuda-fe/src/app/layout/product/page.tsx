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
  child: Product[]
}


interface Product {
  "Nama Produk": string,
  total_terjual: number
}

// const Insight = ({ title, desc, child }: InsightProps): JSX.Element => {
const Insight: React.FC<InsightProps> = ({ title, desc, child }) => {
  return (
    <div className="w-full">
      <div className="m-2 h-full p-2 bg-white rounded-xl border shadow-sm">
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
                  {item['Nama Produk']} {item.total_terjual}
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