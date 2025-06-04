import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import LandingPage from "./components/LandingPage";
import { places } from "./data/places";
import { MapView } from "./components/MapView";
import { Sidebar } from "./components/Sidebar";
const AppContainer = styled.div`
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#ff8a00",
    },
    secondary: {
      main: "#e52e71",
    },
  },
});
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState("");
  const [showMap, setShowMap] = useState(false);
    setSelectedId(id);
  };
      p.city.toLowerCase().includes(filter.toLowerCase()),
  );
  const list = filter ? filteredPlaces : places;
    return <LandingPage onExplore={() => setShowMap(true)} />;
      <AppContainer>
          <MapView
            places={list}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
        </div>
      </AppContainer>
    </ThemeProvider>
  );

export default App;

  if (!showMap) {
    return (
      <LandingContainer>
        <Title>Suu's Global Pizza Journey</Title>
        <Subtitle>
          Join Suu as she travels the globe, tasting countless slices in search
          of the perfect pizza.
        </Subtitle>
        <ExploreButton onClick={() => setShowMap(true)}>
          See the Pizzas
        </ExploreButton>
      </LandingContainer>
    )
  }

  return (
    <Container>
      <Sidebar
        places={places}
        selectedId={selectedId}
        onSelect={handleSelect}
        filter={filter}
        onFilter={setFilter}
        onSuggest={() => setShowSuggest(true)}
      />
      <div style={{ flex: 1 }}>
        <MapView places={list} selectedId={selectedId} onSelect={handleSelect} />
        {selectedId && (
          <PlaceCard
            place={places.find((p) => p.id === selectedId)!}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
      {showSuggest && <SuggestModal onClose={() => setShowSuggest(false)} />}
    </Container>
  )
}

export default App
