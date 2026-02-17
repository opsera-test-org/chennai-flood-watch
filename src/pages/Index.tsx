import { AlertTriangle, Droplets, MapPin, Users, Phone, Clock, ChevronRight, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import floodHero from "@/assets/flood-hero.jpg";
import floodStreet from "@/assets/flood-street.jpg";
import floodRescue from "@/assets/flood-rescue.jpg";

const mockIncidents = [
  { id: 1, location: "T. Nagar", severity: "Critical", time: "12 min ago", description: "Major waterlogging on Usman Road, water level 4ft", reports: 48 },
  { id: 2, location: "Velachery", severity: "High", time: "28 min ago", description: "Residential areas submerged near Velachery Lake", reports: 35 },
  { id: 3, location: "Adyar", severity: "High", time: "45 min ago", description: "Adyar River overflowing near bridge, road closed", reports: 22 },
  { id: 4, location: "Porur", severity: "Medium", time: "1 hr ago", description: "Moderate flooding near Porur Lake outlet", reports: 15 },
  { id: 5, location: "Tambaram", severity: "Low", time: "2 hr ago", description: "Minor waterlogging on GST Road cleared", reports: 8 },
];

const severityColor: Record<string, string> = {
  Critical: "bg-critical text-critical-foreground",
  High: "bg-warning text-warning-foreground",
  Medium: "bg-secondary text-secondary-foreground",
  Low: "bg-success text-success-foreground",
};

const stats = [
  { label: "Active Alerts", value: "23", icon: AlertTriangle, accent: "text-primary" },
  { label: "Areas Affected", value: "14", icon: MapPin, accent: "text-critical" },
  { label: "Rescued Today", value: "312", icon: Users, accent: "text-success" },
  { label: "Water Level (ft)", value: "6.2", icon: Droplets, accent: "text-primary" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Droplets className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-foreground">Chennai Flood Watch</h1>
              <p className="text-xs text-muted-foreground font-mono">LIVE MONITORING</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-critical/20 px-3 py-1.5">
              <Radio className="h-3 w-3 text-critical animate-pulse-glow" />
              <span className="text-xs font-semibold text-critical">RED ALERT</span>
            </div>
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Emergency
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={floodHero}
          alt="Aerial view of Chennai flooding"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative flex h-full flex-col justify-end pb-10">
          <Badge className="mb-3 w-fit bg-critical text-critical-foreground text-xs font-mono">
            ⚠ SEVERE FLOOD WARNING
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground max-w-xl leading-tight">
            Heavy rainfall continues across Chennai metropolitan area
          </h2>
          <p className="mt-2 text-muted-foreground max-w-lg">
            IMD has issued a red alert for Chennai and surrounding districts. Residents in low-lying areas are advised to evacuate immediately.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="container -mt-6 relative z-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <stat.icon className={`h-6 w-6 ${stat.accent}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground font-mono">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Incident Feed */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">Live Incident Feed</h3>
              <Badge variant="outline" className="font-mono text-xs">
                <Clock className="mr-1 h-3 w-3" />
                Updated just now
              </Badge>
            </div>

            <div className="space-y-3">
              {mockIncidents.map((incident) => (
                <Card
                  key={incident.id}
                  className="border-border bg-card hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
                      incident.severity === "Critical" ? "bg-critical animate-pulse-glow" :
                      incident.severity === "High" ? "bg-warning" :
                      incident.severity === "Medium" ? "bg-secondary" : "bg-success"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{incident.location}</span>
                        <Badge className={`${severityColor[incident.severity]} text-[10px] px-1.5 py-0`}>
                          {incident.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{incident.description}</p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="font-mono">{incident.time}</span>
                        <span>{incident.reports} reports</span>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Photos */}
            <Card className="border-border bg-card overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Field Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <img
                    src={floodStreet}
                    alt="Flooded streets with rescue boats"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                    <p className="text-xs font-semibold text-foreground">T. Nagar — Rescue ops underway</p>
                    <p className="text-[10px] text-muted-foreground font-mono">12 min ago</p>
                  </div>
                </div>
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <img
                    src={floodRescue}
                    alt="Rescue team helping residents"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                    <p className="text-xs font-semibold text-foreground">Adyar — Teams deployed</p>
                    <p className="text-[10px] text-muted-foreground font-mono">45 min ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Emergency Helplines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {[
                  { name: "NDRF Control Room", number: "011-24363260" },
                  { name: "Chennai Corp", number: "1913" },
                  { name: "Fire & Rescue", number: "101" },
                  { name: "Police Control", number: "100" },
                ].map((contact) => (
                  <div
                    key={contact.name}
                    className="flex items-center justify-between rounded-lg bg-muted p-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{contact.name}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-primary">{contact.number}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
