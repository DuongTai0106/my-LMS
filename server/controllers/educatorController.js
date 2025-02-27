import { clerkClient } from "@clerk/express";
export const updateRoleToEducator = async (req, res) => {
  try {
    const userId = req.auth.userId;
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "educator",
      },
    });
    res.json({ success: true, message: "You can publish a course now" });
    console.log(req.auth);
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
