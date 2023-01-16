import React from "react";
import { Card, CardHeader } from "../../Styles/card.styles";
import { Skeleton, Stack } from "@mui/material";

const BookmarkCardSkeleton = () => {
    return (
        <Card>
            <CardHeader>
                <Skeleton sx={{ width: "25%" }} />
                <Skeleton sx={{ width: "20%" }} />
            </CardHeader>

            <>
                <Skeleton sx={{ width: "100%" }} />
                <Skeleton sx={{ width: "80%" }} />
            </>
            <Stack direction="row" spacing={2}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
            </Stack>
        </Card>
    );
};

export default BookmarkCardSkeleton;
