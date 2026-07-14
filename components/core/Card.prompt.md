Content surface. Depth comes from the hairline + white-on-cream contrast — never a shadow.

```jsx
<Card>
  <CardHeader>
    <CardTitle>Q3 Roadmap</CardTitle>
    <CardDescription>12 epics · 4 teams</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter><Button>Open</Button></CardFooter>
</Card>
```

Compose with `CardHeader / CardTitle / CardDescription / CardContent / CardFooter`. Default radius is `md` (8px) per the app's button-rounding rule; bump to `lg` for large feature containers only.
