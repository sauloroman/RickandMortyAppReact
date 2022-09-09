const formatData = data => {
      const finalData = {
            image: data?.image,
            status: data?.status,
            name: data?.name,
            species: data?.species,
            origin: data?.origin?.name,
            amountEpisodes: data?.episode?.length
      }

      return finalData;
}

export default formatData